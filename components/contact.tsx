"use client";

import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

import { useSectionInView } from "@/hooks/use-section-in-view";
import { sendEmail } from "@/actions/send-email";

import SectionHeading from "@/components/section-heading";
import SubmitButton from "@/components/submit-button";

export default function Contact({
  locale
}: {
  locale: string
}) {

  const { ref } = useSectionInView(locale === 'vn' ? "Contato" : "Contact");
  const t = useTranslations('ContactSection');

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{t('heading')}</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {t.rich('description', {
          link: (chunks) => (
            <a className="underline" href="mailto:ngoanhvu110293@gmail.com">{chunks}</a>
          )
        })}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success(t('success'));
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={t('yourEmail')}
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={t('yourMessage')}
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
