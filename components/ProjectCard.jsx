import Link from "next/link";
import { RxExternalLink, RxGithubLogo } from "react-icons/rx";

const ProjectCard = ({ project }) => {
  return (
    <div className='flex flex-col bg-white dark:bg-night-gray shadow-md dark:shadow-md transition duration-300 group hover:shadow-blue-500 dark:hover:shadow-night-teal rounded-lg p-5 pb-5 hover:cursor-pointer'>
      <Link href={project.projectSiteUrl} target='_blank'>
        <h1 className='transition duration-300 mb-8 cursor-pointer group-hover:text-blue-500 dark:group-hover:text-night-teal text-xl lg:text-2xl font-semibold'>
          {project.title}
        </h1>

        <p className='cursor-pointer text-base text-gray-700 dark:text-gray-300 font-normal mb-8'>
          {project.description}
        </p>
      </Link>

      <div className='flex flex-wrap -ml-2 mb-3 mt-auto'>
        {project.tags.map((tag, i) => {
          return (
            <div key={i}>
              <span className='inline-block ml-2 bg-blue-500 dark:bg-night-blue text-xs font-semibold rounded-full text-white px-2 py-1 mb-2 cursor-pointer'>
                {tag.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className='flex'>
        <Link href={project.githubRepoUrl} target='_blank'>
          <RxGithubLogo className='text-github-black hover:text-blue-500 dark:hover:text-night-teal dark:text-slate-400 h-5 w-5 mr-2' />
        </Link>
        <Link href={project.projectSiteUrl} target='_blank'>
          <RxExternalLink className='text-github-black hover:text-blue-500 dark:hover:text-night-teal dark:text-slate-400 h-5 w-5' />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
