import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "next-themes";

const Form = () => {
  const [error, setError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const messageRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const storeDataRef = useRef();
  const reCaptchaRef = useRef();

  const { theme } = useTheme();

  useEffect(() => {
    nameRef.current.value = window.localStorage.getItem("name");
    emailRef.current.value = window.localStorage.getItem("email");
  }, []);

  const onReCaptchaChange = (reCaptchaCode) => {
    if (!reCaptchaCode) return;

    reCaptchaRef.current.reset();
  };

  const handleSubmit = async () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    setError(false);

    const { value: message } = messageRef.current;
    const { value: name } = nameRef.current;
    const { value: email } = emailRef.current;
    const { checked: storeData } = storeDataRef.current;

    if (!name || !email || !message) {
      setError(true);

      if (!name) {
        setNameError(true);

        setTimeout(() => {
          setNameError(false);
        }, 3000);
      }

      if (!email) {
        setEmailError(true);

        setTimeout(() => {
          setEmailError(false);
        }, 3000);
      }

      if (!message) {
        setMessageError(true);

        setTimeout(() => {
          setMessageError(false);
        }, 3000);
      }

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    if (regEx.test(email)) {
      const token = await reCaptchaRef.current.executeAsync();

      setInProgress(true);

      const messageObj = {
        name,
        email,
        message,
        "g-recaptcha-response": token,
      };

      emailjs.send(serviceID, templateID, messageObj, publicKey).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";

          setShowSuccessMessage(true);

          setTimeout(() => {
            setShowSuccessMessage(false);
            setInProgress(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    } else if (!regEx.test(email)) {
      setEmailError(true);

      setTimeout(() => {
        setEmailError(false);
      }, 3000);
    }
  };

  return (
    <div className='relative bg-white dark:bg-night-gray shadow-md rounded-lg p-8 pb-9 pt-10 md:pb-7'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <label className='relative cursor-pointer'>
          <input
            type='text'
            ref={nameRef}
            className={`px-3.5 py-2 outline-none w-full rounded-lg ring-1 ring-gray-200 focus:ring-2 ${
              nameError && "ring-2 ring-red-500"
            } focus:ring-cyan-700 dark:focus:ring-cyan-300 bg-white dark:bg-night-gray text-gray-700 dark:text-night-white`}
            placeholder=' '
            name='name'
            autoComplete='off'
            required
          />
          <span
            className={`text-lg text-gray-700 dark:text-gray-300 ${
              nameError && "text-red-500 dark:text-red-500"
            } text-opacity-50 italic absolute left-4 top-1 transition duration-300 place-holder`}
          >
            Name*
          </span>
        </label>

        <label className='relative cursor-pointer'>
          <input
            type='text'
            ref={emailRef}
            className={`px-3.5 py-2 outline-none w-full rounded-lg ring-1 ring-gray-200 focus:ring-2 ${
              emailError && "ring-2 ring-red-500 text-red-500 dark:text-red-500"
            } focus:ring-cyan-700 dark:focus:ring-cyan-300 bg-white dark:bg-night-gray text-gray-700 dark:text-night-white`}
            placeholder=' '
            name='email'
            autoComplete='off'
            required
          />
          <span
            className={`text-lg text-gray-700 dark:text-gray-300 ${
              emailError && "text-red-500 dark:text-red-500"
            } text-opacity-50 italic absolute left-4 top-1 transition duration-300 place-holder`}
          >
            Email*
          </span>
        </label>
      </div>

      <div className='grid grid-cols-1 gap-4 mb-4'>
        <label className='relative cursor-pointer'>
          <textarea
            ref={messageRef}
            className={`px-3.5 py-2 outline-none w-full rounded-lg ring-1 ring-gray-200 focus:ring-2 ${
              messageError && "ring-2 ring-red-500"
            } focus:ring-cyan-700 dark:focus:ring-cyan-300 bg-white dark:bg-night-gray text-gray-700 dark:text-night-white`}
            placeholder=' '
            name='message'
            autoComplete='off'
            required
          />
          <span
            className={`text-lg text-gray-700 dark:text-gray-300 ${
              messageError && "text-red-500 dark:text-red-500"
            } text-opacity-50 italic absolute left-4 top-1 transition duration-300 place-holder`}
          >
            Leave a message*
          </span>
        </label>
      </div>

      <div className='flex mb-4'>
        <input
          ref={storeDataRef}
          type='checkbox'
          defaultChecked={true}
          id='storeData'
          name='storeData'
          className='cursor-pointer h-3 w-3 md:self-center accent-cyan-500 mt-1.5 md:mt-0.5'
        />
        <label
          className='text-base lg:text-lg self-center text-gray-700 dark:text-gray-300 cursor-pointer ml-2'
          htmlFor='storeData'
        >
          Save my e-mail and name for the next time I message.
        </label>
      </div>

      <div className='mt-8 pb-2'>
        <button
          type='button'
          disabled={inProgress ? true : false}
          onClick={handleSubmit}
          className='bg-cyan-700 active:bg-cyan-900 dark:bg-cyan-600 dark:active:bg-cyan-700 inline-block text-lg font-medium rounded-full text-white px-3 py-1 cursor-pointer disabled:opacity-50 disabled:active:bg-cyan-700 disabled:dark:active:bg-cyan-600 disabled:cursor-default'
        >
          Send
        </button>
        {showSuccessMessage && !error && !emailError && (
          <span className='text-sm float-right font-semibold text-green-500 dark:text-night-teal ml-auto mt-3'>
            Email sent successfully.
          </span>
        )}
        {error && (
          <span className='absolute bottom-3 md:bottom-2 left-8 text-sm font-semibold text-red-500'>
            *All fields are required.
          </span>
        )}
        {emailError && !error && (
          <span className='absolute bottom-3 md:bottom-2 left-8 text-sm font-semibold text-red-500'>
            Please input a valid email address.
          </span>
        )}
      </div>

      <ReCAPTCHA
        className='opacity-0'
        ref={reCaptchaRef}
        size='invisible'
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        theme={theme}
        onChange={onReCaptchaChange}
      />
    </div>
  );
};

export default Form;
