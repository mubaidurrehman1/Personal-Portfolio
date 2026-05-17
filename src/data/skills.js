import {
  TbBrandJavascript,
  TbBrandReact,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandNodejs,
  TbBrandGit,
  TbBrandTypescript,
  TbBrandRedux,
  TbBrandVite,
  TbBrandVscode,
} from "react-icons/tb";
import {
  SiMongodb,
  SiPostgresql,
  SiReactrouter,
  SiExpress,
  SiFastapi,
  SiPython,
  SiAppwrite,
  SiVercel,
  SiGithub,
  SiApachenetbeanside,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Programming Languages",
    variant: "blue",
    skills: [
      { icon: TbBrandJavascript, name: "JavaScript" },
      { icon: TbBrandHtml5, name: "HTML5" },
      { icon: TbBrandCss3, name: "CSS3" },
      { icon: SiPython, name: "Python" },
      { icon: TbBrandTypescript, name: "TypeScript" },
    ],
  },
  {
    title: "Libraries & Frameworks",
    variant: "purple",
    skills: [
      { icon: TbBrandReact, name: "React.js" },
      { icon: TbBrandNodejs, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiFastapi, name: "FastApi" },
      { icon: TbBrandTailwind, name: "Tailwind CSS" },
      { icon: TbBrandRedux, name: "Redux" },
      { icon: SiReactrouter, name: "React-Router" },
    ],
  },
  {
    title: "Databases",
    variant: "green",
    skills: [
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiPostgresql, name: "PostgreSQL" },
    ],
  },
  {
    title: "Tools",
    variant: "gray",
    skills: [
      { icon: TbBrandGit, name: "Git" },
      { icon: SiGithub, name: "GitHub" },
      { icon: TbBrandVscode, name: "VS Code" },
      { icon: SiApachenetbeanside, name: "Apache NetBeans" },
      { icon: TbBrandVite, name: "Vite" },
      { icon: SiAppwrite, name: "AppWrite" },
      { icon: SiVercel, name: "Vercel" },
    ],
  },
];
