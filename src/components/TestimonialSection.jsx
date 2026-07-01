"use client";

import { Avatar } from "@heroui/react";
import { FaStar } from "react-icons/fa";
import MotionWrapper from "./MotionWrapper";

export default function TestimonialSection() {
  return (
    <section className="px-4 ">
      <MotionWrapper>
      <div className="max-w-7xl mx-auto rounded-none md:rounded-lg overflow-hidden bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600">
        <div className="max-w-5xl mx-auto px-8 py-10 text-center">
          {/* Stars */}
          <div className="flex justify-center gap-2 mb-10">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className="text-yellow-400 text-4xl"
              />
            ))}
          </div>

          {/* Quote */}
          <h2 className="text-3xl md:text-3xl font-bold text-white leading-relaxed mb-5 font-serif">
            BiblioDrop completely changed my reading habits. I get a
            new book delivered every week and the librarians always
            pick something I love.
          </h2>

          {/* User */}
          <div className="flex items-center justify-center gap-5">
            <Avatar
              src="https://i.pravatar.cc/150?img=32"
              className="w-16 h-16 border-4 border-white/40"
            />

            <div className="text-left">
              <h4 className="text-white text-2xl font-bold">
                Sophie Carter
              </h4>

              <p className="text-white/80 text-lg">
                Member since 2023 · San Francisco, CA
              </p>
            </div>
          </div>
        </div>
      </div>
      </MotionWrapper>
    </section>
  );
}