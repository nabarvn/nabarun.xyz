import React from "react";
import { Tooltip } from "react-tooltip";
import Link from "next/link";
import TechIcon from "./TechIcon";

const Skillset = () => {
  const skills = [
    {
      id: "javascript",
      url: "https://developer.mozilla.org/en-us/docs/web/javascript",
      content: "JavaScript",
    },
    {
      id: "react",
      url: "https://reactjs.org",
      content: "React",
    },
    {
      id: "typescript",
      url: "https://www.typescriptlang.org",
      content: "TypeScript",
    },
    {
      id: "nextjs",
      url: "https://nextjs.org",
      content: "Next.js",
    },
    {
      id: "tailwind",
      url: "https://tailwindcss.com",
      content: "Tailwind",
    },
    {
      id: "bootstrap",
      url: "https://getbootstrap.com",
      content: "Bootstrap",
    },
    {
      id: "html",
      url: "https://html.com/html5",
      content: "HTML5",
    },
    {
      id: "css",
      url: "https://www.w3schools.com/css",
      content: "CSS3",
    },
    {
      id: "mui",
      url: "https://mui.com",
      content: "Material UI",
    },
    {
      id: "firebase",
      url: "https://firebase.google.com",
      content: "Firebase",
    },
    {
      id: "stripe",
      url: "https://stripe.com/docs/development",
      content: "Stripe",
    },
    {
      id: "openai",
      url: "https://platform.openai.com/docs/introduction",
      content: "OpenAI",
    },
    {
      id: "azure",
      url: "https://azure.microsoft.com/en-us/free",
      content: "Microsoft Azure",
    },
    {
      id: "gql",
      url: "https://graphql.org",
      content: "GraphQL",
    },
    {
      id: "sass",
      url: "https://sass-lang.com",
      content: "SASS",
    },
  ];

  return (
    <div className='text-base md:text-lg font-semibold justify-center cursor-default md:text-justify md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:px-4 lg:px-5 xl:px-9 pb-0 mt-14 md:mt-11'>
      <div className='lg:flex group'>
        <h3 className='text-orange-500 dark:text-orange-300 text-xl md:text-2xl xl:text-3xl'>
          /stack
        </h3>
        <span className='self-center lg:opacity-0 group-hover:opacity-100 transition duration-300 text-orange-500 dark:text-orange-300 text-sm lg:text-base mt-1 lg:mt-0 xl:mt-1 lg:ml-5'>
          (technologies I&apos;ve played with)
        </span>
      </div>

      <div className='flex flex-wrap justify-center mt-5'>
        {skills.map((skill, uid) => {
          return (
            <React.Fragment key={uid}>
              <div
                id={skill.id}
                className='cursor-pointer bg-light-gray dark:bg-night-black hover:bg-gray-100 dark:hover:bg-night-gray transition duration-300 rounded-lg p-1.5 md:p-2 m-2'
              >
                <Link href={skill.url} target='_blank' rel='noreferrer'>
                  <TechIcon id={skill.id} />
                </Link>
              </div>

              <Tooltip
                anchorId={skill.id}
                content={skill.content}
                place='bottom'
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Skillset;
