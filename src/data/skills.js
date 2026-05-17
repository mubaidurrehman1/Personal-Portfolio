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
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { glyph: TbBrandJavascript, name: "JavaScript" },
      { glyph: TbBrandTypescript, name: "TypeScript" },
      { glyph: TbBrandHtml5, name: "HTML5" },
      { glyph: TbBrandCss3, name: "CSS3" },
      { glyph: SiPython, name: "Python" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { glyph: TbBrandReact, name: "React" },
      { glyph: TbBrandNodejs, name: "Node.js" },
      { glyph: SiExpress, name: "Express" },
      { glyph: SiFastapi, name: "FastAPI" },
      { glyph: TbBrandTailwind, name: "Tailwind CSS" },
      { glyph: TbBrandRedux, name: "Redux" },
      { glyph: SiReactrouter, name: "React Router" },
    ],
  },
  {
    title: "Data",
    skills: [
      { glyph: SiMongodb, name: "MongoDB" },
      { glyph: SiPostgresql, name: "PostgreSQL" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { glyph: TbBrandGit, name: "Git" },
      { glyph: SiGithub, name: "GitHub" },
      { glyph: TbBrandVscode, name: "VS Code" },
      { glyph: TbBrandVite, name: "Vite" },
      { glyph: SiAppwrite, name: "Appwrite" },
      { glyph: SiVercel, name: "Vercel" },
    ],
  },
];
