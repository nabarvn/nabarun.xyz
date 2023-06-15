import Head from "next/head";
import Image from "next/image";
import { Intro, Today, Skillset, Random, Navbar } from "../components";
import { getOwner } from "../services";
import { useState } from "react";

const About = ({ owner }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      id='layout-child'
      className='container mx-auto mb-auto px-10 lg:px-0 xl:px-10'
    >
      <Head>
        <title>Nabarun</title>
        <link rel='icon' href={owner.image.url} />
      </Head>

      <div className='grid grid-cols-1 md:grid-cols-12'>
        <div className='col-span-1 md:col-span-10'>
          <div className='flex flex-col lg:flex-row md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:justify-between cursor-default pt-4 xl:pt-5 md:px-4 lg:px-5 xl:px-9'>
            <Intro />

            <div className='flex justify-center order-1 lg:order-2 lg:mr-9 lg:mt-5 xl:mt-3'>
              <Image
                priority
                unoptimized
                alt='gmOfficer.eth'
                src='/gmOfficer.png'
                height={100}
                width={100}
                className={`h-52 w-52 h md:h-80 md:w-80 rotate-3 rounded-2xl duration-700 ease-in-out ${
                  isLoading
                    ? "scale-105 blur-2xl grayscale opacity-0"
                    : "scale-100 blur-0 grayscale-0 opacity-100"
                }`}
                onLoadingComplete={() => setLoading(false)}
              />
            </div>
          </div>
          <div>
            <Today />

            <Skillset />

            <Random />
          </div>
        </div>

        <div className='col-span-1 md:col-span-2 hidden md:contents'>
          <div className='flex flex-col md:col-start-11 md:col-end-13'>
            <div className='md:sticky top-9'>
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

export default About;
