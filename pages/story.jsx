import Head from "next/head";
import { Navbar } from "../components";
import { getOwner } from "../services";

const Projects = ({ owner }) => {
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
              <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center text-steel-blue dark:text-blue-300 mb-9'>
                The most important life skills are PATIENCE, EMPATHY, and
                RESILIENCE.
              </h1>
              <p className='text-base md:text-lg text-center font-semibold text-night-gray dark:text-gray-300 px-5'>
                I&apos;m a 90s kid who was born to the best parents in the
                world, residing in the North-Eastern part of India.
              </p>
            </div>

            <div className='text-night-gray dark:text-gray-300 text-base md:text-lg font-semibold justify-center space-y-9 cursor-default md:max-w-5xl lg:max-w-4xl xl:max-w-5xl pb-0 px-0 xl:px-2 mt-14 md:mt-11'>
              <div>
                <h1 className='text-xl md:text-2xl xl:text-3xl font-bold border-b pb-2'>
                  ☀️ Nurturing the curiosity
                </h1>
                <p className='md:text-justify mt-5'>
                  During my early childhood days, whenever I was asked about my
                  aim in life, for some reason my consistent response used to be
                  &quot;I aspire to become a Scientist&quot;. In retrospect, I
                  think I just wanted to be like someone who&apos;d contribute
                  significantly to the growth of science & technology. While
                  growing up, my pool of interests had begun to take a better
                  shape. Eventually, I discovered the inner engineer between
                  building small objects and dismantling my toy cars in order to
                  find out what was under the hood. It was precisely this memory
                  that really helped me understand certain things when it came
                  to selecting a career path. As you can probably tell, I chose
                  to pursue engineering. Partly because I loved breaking and
                  making things, and partly because someone had told me that
                  engineers don&apos;t have to study as much (not true).
                </p>
              </div>
              <div>
                <h1 className='text-xl md:text-2xl xl:text-3xl font-bold border-b pb-2'>
                  💎 Embracing the big change
                </h1>
                <p className='md:text-justify mt-5'>
                  I studied Electrical Engineering for my bachelor&apos;s
                  thinking that electricity is the basis for almost every
                  technology we are familiar with; so why not learn more about
                  it? While grinding in college, I managed to work as an intern
                  for multiple firms and 4 years through the process I realized
                  that software was more my jam than hardware; which was a fair
                  enough transition for me given how rapidly the tech industry
                  was evolving. After securing a decent score, I ended up
                  getting a great job at an international IT Giant. Learned a
                  ton during the Initial Learning Program and also enjoyed my
                  time there as a corporate engineer. However, as fate would
                  have it, I started feeling that something was missing. To put
                  it differently, I found myself at a crossroads in my career
                  which resulted in a general sense of being lost in life.
                  Despite the challenges, I chose to take a career break to gain
                  the much-needed perspective and clarity for a transformative
                  shift towards a more fulfilling life.
                </p>
              </div>
              <div>
                <h1 className='text-xl md:text-2xl xl:text-3xl font-bold border-b pb-2'>
                  💻 Unveiling the supercoder
                </h1>
                <p className='md:text-justify mt-5'>
                  The best thing that happened to me in 2019 was coding. I
                  simply fell in love with the notion of being able to translate
                  ideas into something really meaningful. With the little
                  programming knowledge I had from high school and college, I
                  decided to dive right into it, only to find out the immense
                  level of effort I&apos;d have to put in order to reach the
                  next checkpoint. From where I was standing, it looked like a
                  huge mountain to be climbed but I didn&apos;t fear because my
                  &quot;motive&quot; was even bigger! Applying the first
                  principles method, I started my long journey with Data
                  Structures and Algorithms using C++. After laying a strong
                  foundation, I opted to learn JavaScript, the language of the
                  internet, and progressed into the development phase. Even
                  though I felt overwhelmed quite often during this whole
                  process, I successfully managed to learn (still learning) all
                  the relevant technologies from scratch while building some
                  cool projects along the way.
                </p>
              </div>

              {/* A major life lesson I learned was that developing web applications
              and solving coding problems are two very different things. To
              achieve both, we must make patience, consistency, and resilience
              our best friends. Also, taking breaks every now and then is
              equally important as coding, if not more. */}
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
  const owner = await getOwner();

  return {
    props: { owner },
  };
};

export default Projects;
