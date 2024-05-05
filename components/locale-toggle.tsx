"use client";

import React, { useTransition } from "react";
import { useParams } from "next/navigation";

import { locales } from "@/config";
import { useRouter, usePathname } from "@/navigation";
import Image from "next/image";

export default function LocaleToggle() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const { locale } = params;

  function toggleLocale() {
    const nextIndex = (locales.findIndex((lang) => lang === locale) + 1) % locales.length;
    const nextLocale = locales[nextIndex];

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <button
      className="h-12 w-12 fixed bottom-5 left-5 bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleLocale}
      disabled={isPending}
    >
      {locale === 'vn' ? <Image
          src="/vn-flag.svg"
          alt="VN"
          width="48"
          height="48"
          quality="95"
      /> : <Image
          src="/us-flag.png"
          alt="US"
          width="48"
          height="48"
          quality="95"
      />}
    </button>
  );
}
