"use client";

import React from 'react';
import { useTranslations } from "next-intl";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Experience as ExperienceType } from '@/types';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { useTheme } from '@/hooks/use-theme';

import SectionHeading from "@/components/section-heading";

export default function Experience({
  locale
}: {
  locale: string
}) {
  const { ref } = useSectionInView(locale === 'vn' ? "Kinh nghiệm" : "Experience");
  const { theme } = useTheme();
  const t = useTranslations('ExperienceSection');

  let experiencesData;

  if (locale === 'vn') {
    experiencesData = require("@/lib/data-vn").experiencesData;
  } else  {
    experiencesData = require("@/lib/data").experiencesData;
  }

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t('heading')}</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item: ExperienceType, index: number) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "black",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}