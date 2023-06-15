import Head from "next/head";
import { Navbar, ProjectCard } from "../components";
import { getOwner, getProjects } from "../services";

const Projects = ({ projects, owner }) => {
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
          <div className='flex flex-col pt-4 xl:pt-5 pb-0 md:px-4 lg:px-5 xl:px-9 md:max-w-lg lg:max-w-5xl'>
            <div className='cursor-default'>
              <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center text-blue-900 dark:text-purple-500 mb-9'>
                I have built quite a few projects trying to put a dent in the
                Universe.
              </h1>
              <p className='text-base md:text-lg text-center font-semibold text-night-gray dark:text-gray-300 px-5'>
                Education itself is not enough if one wants to unlock their
                fullest potential while learning something new. Implementation
                of knowledge is what makes us who we want to become, slowly but
                steadily. Consistency is key - it&apos;s been my motto over the
                course of studying Software Engineering. Well, through
                dedication, a lot of hard work and perseverance, here&apos;s
                some of the noteworthy builds I&apos;ve developed so far on my
                journey!
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-9 md:pl-9 md:pr-9 mt-20 lg:mt-32'>
              <div className='col-span-1 lg:grid lg:grid-cols-4 lg:col-span-12 lg:gap-9'>
                {projects.map((project, i) => {
                  return (
                    <div key={i} className='flex items-stretch col-span-2 mb-8'>
                      <ProjectCard project={project} />
                    </div>
                  );
                })}
              </div>
            </div>
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
  const projects = (await getProjects()) || [];
  const owner = await getOwner();

  return {
    props: { projects, owner },
  };
};

export default Projects;
