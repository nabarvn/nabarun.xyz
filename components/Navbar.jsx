import Link from "next/link";

const Navbar = () => {
  return (
    <div className='md:col-start-11 md:col-end-13 md:mr-4 lg:mr-5 xl:mr-9 pt-0 mt-52'>
      <div className='text-lg md:text-end font-semibold transition duration-300 mb-3'>
        <Link
          href='/about'
          className='hover:text-blue-500 dark:hover:text-indigo-500 transition duration-300'
        >
          ABOUT
        </Link>
      </div>

      <div className='text-lg md:text-end font-semibold transition duration-300 mb-3'>
        <Link
          href='https://blog.nabarun.xyz'
          className='hover:text-blue-500 dark:hover:text-indigo-500 transition duration-300'
          target='_blank'
        >
          BLOG
        </Link>
      </div>

      <div className='text-lg md:text-end font-semibold transition duration-300 mb-3'>
        <Link
          href='/projects'
          className='hover:text-blue-500 dark:hover:text-indigo-500 transition duration-300'
        >
          PROJECTS
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
