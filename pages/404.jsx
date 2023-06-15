import Head from "next/head";
import Link from "next/link";
import { getOwner } from "../services";

const ErrorPage = ({ owner }) => {
  return (
    <div
      id='layout-child'
      className='flex flex-col m-auto justify-center items-center error-content lg:px-0 xl:px-10'
    >
      <Head>
        <title>Nabarun</title>
        <link rel='icon' href={owner.image.url} />
      </Head>
      <div className='text-2xl mb-8'>You seem lost, fren.</div>
      <Link href='/'>
        <button className='text-white dark:text-night-white bg-blue-500 dark:bg-night-blue hover:bg-blue-900 dark:hover:bg-indigo-700 transition duration-300 rounded-lg font-semibold p-2'>
          Go Back Home?
        </button>
      </Link>
    </div>
  );
};

export const getStaticProps = async () => {
  const owner = await getOwner();

  return {
    props: { owner },
  };
};

export default ErrorPage;
