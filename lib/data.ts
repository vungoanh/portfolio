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
    title: "Lập trình viên",
    location: "Fast Boy Marketing, TP.Hồ Chí Minh",
    description:
        "Lập trình viên tại Fast Boy Marketing, làm việc với React. Ở đó, tôi làm việc để giải quyết các lỗi do khách hàng báo cáo và phát triển các tính năng mới trong hệ thống.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Hiện tại",
  },
  {
    title: "Cử nhân Khoa học Máy tính",
    location:"Học viện Bưu chính viễn thông",
    description: "Vừa tốt nghiệp chuyên ngành Khoa học Máy tính.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Khóa học CNTT",
    location: "Trường THPT Bùi Thị Xuân, TP.Phan Thiết",
    description:
        "Tôi đã theo học một khóa về CNTT khi còn học trung học.",
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