import {
  SiBootstrap,
  SiCss3,
  SiFirebase,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMaterialui,
  SiMicrosoftazure,
  SiNextdotjs,
  SiOpenai,
  SiReact,
  SiSass,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const TechIcon = ({ id }) => {
  const getIcon = (id) => {
    switch (id) {
      case "javascript":
        return (
          <SiJavascript className='fill-[#F0DB4F] dark:fill-slate-400 bg-[#323330] dark:bg-night-black h-10 w-10 md:h-20 md:w-20' />
        );

      case "react":
        return (
          <SiReact className='fill-[#61DBFB] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      case "typescript":
        return (
          <SiTypescript className='fill-[#3178C6] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      case "nextjs":
        return (
          <SiNextdotjs className='dark:text-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      case "tailwind":
        return (
          <SiTailwindcss className='fill-[#38BDF8] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      case "bootstrap":
        return (
          <SiBootstrap className='fill-[#563D7C] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      case "html":
        return (
          <SiHtml5 className='fill-[#E44D26] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      case "css":
        return (
          <SiCss3 className='fill-[#264DE4] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      case "mui":
        return (
          <SiMaterialui className='fill-[#007FFF] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      case "firebase":
        return (
          <SiFirebase className='fill-[#FFA611] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      case "stripe":
        return (
          <SiStripe className='fill-[#4379FF] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      case "openai":
        return (
          <SiOpenai className='fill-[#000000] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      case "azure":
        return (
          <SiMicrosoftazure className='fill-[#008AD7] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      case "gql":
        return (
          <SiGraphql className='fill-[#E535AB] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      case "sass":
        return (
          <SiSass className='fill-[#CD6799] dark:fill-slate-400 h-10 w-10 md:h-20 md:w-20' />
        );

      default:
        return "No Icon";
    }
  };

  return getIcon(id);
};

export default TechIcon;
