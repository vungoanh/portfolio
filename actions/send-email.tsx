"use server";

import React from 'react';
import { Resend } from 'resend';

import { getErrorMessage, validateString } from '@/lib/utils';

import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "invalid sender email"
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "invalid sender email"
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["ngoanhvu110293@gmail.com"],
      reply_to: senderEmail,
      subject: "Message from contact form",
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
}