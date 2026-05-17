import { MdHomeFilled, MdSchool, MdWork, MdCode, MdWeb } from "react-icons/md";

export const navbarItems = [
  { id: "home", label: "Home", icon: MdHomeFilled },
  { id: "about", label: "About", icon: MdWork },
  { id: "skills", label: "Skills", icon: MdCode },
  { id: "projects", label: "Projects", icon: MdWeb },
  { id: "education", label: "Education", icon: MdSchool },
];

export const sectionIds = navbarItems.map((item) => item.id);
