import { experiencesData, links } from "@/lib/data";
import { projectsData } from "@/lib/data";

import { experiencesData as experiencesDataVn, links as linksVn } from "@/lib/data-vn";
import { projectsData as projectsDataVn } from "@/lib/data-vn";

export type Experience = (typeof experiencesData)[number] | (typeof experiencesDataVn)[number];

export type Project = (typeof projectsData)[number] | (typeof projectsDataVn)[number];

export type Section = (typeof links)[number] | (typeof linksVn)[number];
export type SectionName = (typeof links)[number]["name"] | (typeof linksVn)[number]["name"];

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export type LocaleProps = {
  params: {locale: string};
};