import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import { Tooltip } from "react-tooltip";

const Footer = () => {
  return (
    <footer className='container flex flex-col mx-auto items-center justify-center bottom-0 px-9 mt-32 pb-9 bg-light-gray dark:bg-night-black'>
      <div className='flex mb-1'>
        <div
          id='twitter-logo'
          className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2'
        >
          <a
            href='https://www.twitter.com/nabarvn'
            target='_blank'
            rel='noreferrer'
          >
            <RxTwitterLogo className='text-twitter-blue dark:text-slate-400 h-5 w-5' />
          </a>
        </div>

        <div
          id='github-logo'
          className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2'
        >
          <a
            href='https://www.github.com/nabarvn'
            target='_blank'
            rel='noreferrer'
          >
            <RxGithubLogo className='text-github-black dark:text-slate-400 h-5 w-5' />
          </a>
        </div>

        <div
          id='linkedin-logo'
          className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2'
        >
          <a
            href='https://www.linkedin.com/in/nabarvn'
            target='_blank'
            rel='noreferrer'
          >
            <RxLinkedinLogo className='text-linkedin-blue dark:text-slate-400 h-5 w-5' />
          </a>
        </div>

        <Tooltip anchorId='twitter-logo' content='Twitter' place='top' />
        <Tooltip anchorId='github-logo' content='Github' place='top' />
        <Tooltip anchorId='linkedin-logo' content='Linkedin' place='top' />
      </div>

      <div className='p-1'>
        <Link
          href='https://github.com/nabarvn/nabarun.xyz'
          className='hover:text-blue-500 dark:hover:text-indigo-400'
          target='_blank'
        >
          Open Source Project
        </Link>
      </div>

      <div className='p-1'>
        <span className='cursor-default'>Built and Powered with ❤️</span>
      </div>
    </footer>
  );
};

export default Footer;
