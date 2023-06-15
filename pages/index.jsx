import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineWavingHand } from "react-icons/md";
import { Navbar } from "../components";
import { getOwner } from "../services";

const Home = ({ owner }) => {
  return (
    <div
      id='layout-child'
      className='container mx-auto mb-auto px-10 lg:px-0 xl:px-10 min-h-screen'
    >
      <Head>
        <title>Nabarun</title>
        <link rel='icon' href={owner.image.url} />
      </Head>

      <div className='grid grid-cols-1 md:grid-cols-12'>
        <div className='col-span-1 md:col-span-10'>
          <div className='flex flex-col md:px-4 lg:px-5 xl:px-9 py-2 md:py-3 xl:py-5'>
            <Image
              unoptimized
              alt='Nabarun.eth'
              src={owner.image.url}
              height={100}
              width={100}
              className='align-middle h-20 w-20 md:h-28 md:w-28 lg:h-24 lg:w-24 xl:h-28 xl:w-28 float-left rounded-full'
            />

            <div
              id='layout-child'
              className='md:max-w-4xl lg:max-w-3xl xl:max-w-4xl mt-3 md:mt-5'
            >
              <h1 className='text-3xl md:text-5xl font-bold cursor-default text-teal-700 dark:text-night-teal'>
                Software developer, web3 degen, and an amateur guitarist.
              </h1>
              <div className='text-justify font-semibold cursor-default mt-3 md:mt-5'>
                <span className='flex'>
                  <span className='text-xl md:text-3xl lg:text-2xl xl:text-3xl italic text-cyan-700 dark:text-purple-300'>
                    Hi fren
                  </span>
                  <span className='self-center'>
                    <MdOutlineWavingHand className='h-5 w-5 md:h-7 md:w-7 ml-2 text-yellow-500 dark:text-yellow-300' />
                  </span>
                </span>
                <span className='flex text-xl md:text-3xl lg:text-2xl xl:text-3xl italic text-cyan-700 dark:text-purple-300 mb-3 md:mb-5'>
                  I&apos;m Nabarun.
                </span>

                <p className='text-base md:text-xl lg:text-lg xl:text-xl text-night-gray dark:text-gray-300 mb-3 md:mb-5'>
                  A self-taught software developer from India with a passion for
                  crafting intuitive web experiences utilizing the T3 stack
                  (TypeScript, Next.js, Tailwind), contributing to open source
                  code and exploring the blockchain rabbit hole. 🚀
                </p>

                <Link href='/email'>
                  <button className='bg-blue-500 dark:bg-night-blue active:bg-blue-900 dark:active:bg-indigo-700 inline-block text-base md:text-xl lg:text-lg xl:text-xl font-medium rounded-full text-white dark:text-night-white px-3 py-1 mt-2 cursor-pointer'>
                    Let&apos;s talk!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-1 md:col-span-2 hidden md:contents'>
          <Navbar />
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

export default Home;
