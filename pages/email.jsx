import Head from "next/head";
import { Form, Navbar } from "../components";
import { getOwner } from "../services";

const Email = ({ owner }) => {
  return (
    <div
      id='layout-child'
      className='container mx-auto mb-auto justify-center items-center min-h-screen px-10 lg:px-0 xl:px-10'
    >
      <Head>
        <title>Nabarun</title>
        <link rel='icon' href={owner.image.url} />
      </Head>

      <div className='grid grid-cols-1 md:grid-cols-12'>
        <div className='col-span-1 md:col-span-10'>
          <div className='flex flex-col pt-4 xl:pt-5 md:px-4 lg:px-5 xl:px-9'>
            <div className='md:max-w-lg lg:max-w-4xl'>
              <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center cursor-default text-cyan-700 dark:text-cyan-300 mb-9'>
                Get in Touch
              </h1>
              <p className='text-base text-center font-semibold cursor-default text-night-gray dark:text-gray-300 mb-9'>
                Please feel free to contact me, even if it&apos;s just to say
                hello. I&apos;m always up for new opportunities and experiences.
                Leave a message and I shall get back to you ASAP. Thanks a bunch
                for stopping by. Talk soon!
              </p>

              <div>
                <Form />
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-1 md:col-span-2 ml-auto hidden md:contents'>
          <div className='flex flex-col md:col-start-11 md:col-end-13'>
            <div className='top-9'>
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const owner = await getOwner();

  return {
    props: { owner },
  };
};

export default Email;
