import { Inter } from "next/font/google";
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Toaster } from "react-hot-toast";

import "./globals.css";

import { locales } from '@/config';
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

import ThemeToggle from "@/components/theme-toggle";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LocaleToggle from "@/components/locale-toggle";

const inter = Inter({ subsets: ["latin"] });

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<LocaleLayoutProps, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default function LocaleLayout({
  children,
  params: { locale }
}: LocaleLayoutProps) {

  unstable_setRequestLocale(locale);

  const messages = useMessages();

  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <NextIntlClientProvider messages={messages}>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header locale={locale}/>
              {children}
              <Footer />
              <Toaster position="top-right"/>
            </ActiveSectionContextProvider>
            <ThemeToggle />
            <LocaleToggle />
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
