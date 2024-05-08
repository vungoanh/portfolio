import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import takingnotesImg from "@/public/taking-notes.png";
import pcbuildmonitorImg from "@/public/pc-build-monitor.png";
import ecommerceadminImg from "@/public/e-commerce-admin.png";
import postsCommentsApi from "@/public/post-comments-api.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Developer",
    location: "Fast Boy Marketing, Ho Chi Minh City",
    description:
        "Programmer at Fast Boy Marketing, working with React. There, I worked on resolving customer reporting issues and developing new features in the system.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Now",
  },
  {
    title: "Bachelor of Computer Science",
    location:"Posts and Telecommunications Institute of Technology",
    description: "Just graduated with a major in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "IT course",
    location: "Bui Thi Xuan High School, Phan Thiet City",
    description:
        "I took an IT course when I was in high school.",
    icon: React.createElement(LuGraduationCap),
    date: "2009 - 2010",
  },
] as const;

export const projectsData = [
  {
    title: "Posts & Comments API",
    description:
      "A RESTful API with endpoints for posts creation, update, delete and listing. As well as comments creation and deletion on posts.",
    tags: ["Node.js", "TypeScript", "Express", "MongoDB", "Docker"],
    imageUrl: postsCommentsApi,
    url: "https://github.com/caiosdeo/posts-comments-api"
  },
  {
    title: "Taking notes",
    description:
      "A public web app for creating documents. It uses a notion-like editor and you can publish documents on the web.",
    tags: ["React", "Next.js", "Convex", "Tailwind"],
    imageUrl: takingnotesImg,
    url: "https://takingnotes.vercel.app/"
  },
  {
    title: "E-Commerce Admin",
    description:
      "This admin project is capable of managing categories, sizes, colors, and products, as well as controlling multiple stores and generating separate API routes for each.",
    tags: ["React", "Next.js", "Prisma", "Postgres", "Tailwind"],
    imageUrl: ecommerceadminImg,
    url: "https://github.com/ecommerce-admin"
  },
  {
    title: "PC Build Monitor",
    description:
      "A web scraping script that get data from a pc builder website. It uses Google API to store the price of each pc part in a Google Spreadsheet.",
    tags: ["Python", "Beautiful Soup", "Google API", "Scraping"],
    imageUrl: pcbuildmonitorImg,
    url: "https://github.com/pc-build-monitor"
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "C#",
  ".NET",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Convex",
  "SQL Server",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Scraping",
] as const;