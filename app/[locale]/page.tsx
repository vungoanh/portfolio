import { unstable_setRequestLocale } from "next-intl/server";

import { LocaleProps } from "@/types";

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home({ params: { locale }}: LocaleProps) {

  unstable_setRequestLocale(locale);

  return (
    <main className="flex flex-col items-center px-4">
      <Intro locale={locale}/>
      <SectionDivider />
      <About locale={locale}/>
      <Projects locale={locale}/>
      <Skills />
      <Experience locale={locale}/>
      <Contact locale={locale}/>
    </main>
  );
}
