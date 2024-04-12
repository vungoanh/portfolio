"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { useSectionInView } from "@/hooks/use-section-in-view";

import SectionHeading from "@/components/section-heading";

export default function About({
  locale
}: {
  locale: string
}) {
  const { ref } = useSectionInView(locale === 'vn' ? "Sobre" : "About");

  const t = useTranslations('AboutSection');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t('heading')}</SectionHeading>
      <p className="mb-3">
        {t.rich('aboutMe', {
          medium: (chunks) => (
            <span className='font-medium'>{chunks}</span>
          ),
          underline: (chunks) => (
            <span className='underline'>{chunks}</span>
          )
        })}
      </p>

      <p>
      {t.rich('hobbies', {
        bold: (chunks) => (
          <span className="font-medium">{chunks}</span>
        ),
        italic: (chunks) => (
          <span className="italic">{chunks}</span>
        )
      })}
      </p>
    </motion.section>
  );
}
