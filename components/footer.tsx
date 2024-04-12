import React from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('Footer');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-20 px-4 text-center text-gray-500">
      {t.rich('copyright', {
        year: currentYear,
        small: (chunks) => (
          <small className="mb-2 block text-xs">
            {chunks}
          </small>
        )
      })}      
      <p className="text-xs">
        {t.rich('about', {
          bold: (chunks) => <span className="font-semibold">{chunks}</span>
        })}
      </p>
    </footer>
  );
}
