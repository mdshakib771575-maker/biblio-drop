"use client";

import { Button, Input } from "@heroui/react";
import { Mail } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

export default function NewsletterSection() {
  return (
    <section className="w-11/12 mx-auto my-24">
      <MotionWrapper>
      <div className="rounded-[32px] border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 shadow-xl">
        <div className="max-w-3xl mx-auto px-8 py-20 text-center">

          {/* Icon */}
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-xl">
            <Mail size={42} className="text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-bold text-slate-900">
            Stay in the loop
          </h2>

          {/* Description */}
          <p className="mt-6 text-xl leading-9 text-slate-500">
            Get weekly reading recommendations, new arrivals alerts,
            <br />
            and exclusive offers delivered straight to your inbox.
          </p>

          {/* Form */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
            <Input
              type="email"
              placeholder="your@email.com"
              radius="full"
              size="lg"
              className="max-w-md"
            />

            <Button
              radius="full"
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-10 text-lg font-semibold text-white"
            >
              Subscribe
            </Button>
          </div>

          {/* Footer */}
          <p className="mt-8 text-base text-slate-400">
            No spam, ever. Unsubscribe anytime.
          </p>

        </div>
      </div>
      </MotionWrapper>
    </section>
  );
}