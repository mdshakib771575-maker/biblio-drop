"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  {
    badge: "BiblioDrop Library Network",
    heading: "Your Local Library,",
    highlight: "Delivered",
    description:
      "Discover books from local libraries near you and get them delivered right to your doorstep. Read more, travel less.",
    primaryBtn: { label: "Browse Naw", href: "/browse-books" },
    secondaryBtn: { label: "Lern More", href: "/how-it-works" },
    image: "../image/banner1.png",
    imageAlt: "Library Delivery",
    stats: [
      { value: "5K+", label: "Books Available" },
      { value: "200+", label: "Local Libraries" },
      { value: "98%", label: "Happy Readers" },
    ],
  },
  {
    badge: "# Book Delivery Platform",
    heading: "What is Your Next",
    highlight: " Great Red ",
    description:
      "Discover books from local libraries near you and get them delivered right to your doorstep. Read more, travel less.",
    primaryBtn: { label: "Browse Naw", href: "/new-arrivals" },
    secondaryBtn: { label: "Lern More", href: "/register" },
    image: "../image/banner2.png",
    imageAlt: "New Book Arrivals",
    stats: [
      { value: "500+", label: "New Each Week" },
      { value: "30+", label: "Genres" },
      { value: "4.9★", label: "Avg Rating" },
    ],
  },
  {
    badge: "Fast & Free Delivery",
    heading: "Books at Your",
    highlight: "Doorstep",
    description:
      "We partner with local couriers to bring your favourite books to you within 24 hours. No late fees, no hassle.",
    primaryBtn: { label: "Browse Naw", href: "/register" },
    secondaryBtn: { label: "Lern More", href: "/delivery" },
    image: "../image/banner3.png",
    imageAlt: "Book Delivery Service",
    stats: [
      { value: "24h", label: "Delivery Time" },
      { value: "50+", label: "Cities Covered" },
      { value: "Free", label: "Delivery Always" },
    ],
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next"); // "next" or "prev"
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index, dir = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((index + slides.length) % slides.length);
        setAnimating(false);
      }, 400);
    },
    [animating]
  );

  const next = useCallback(() => goTo(current + 1, "next"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "prev"), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  // Slide animation styles - always comes from right
  const slideStyle = {
    transform: animating ? "translateX(80px)" : "translateX(0px)",
    opacity: animating ? 0 : 1,
    transition: "transform 0.4s ease, opacity 0.4s ease",
  };

  return (
    <section className="relative overflow-hidden ">
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-md border border-violet-200 text-violet-600 hover:bg-violet-50 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-md border border-violet-200 text-violet-600 hover:bg-violet-50 transition"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      <div className="max-w-7xl mx-auto px-14 lg:px-8 py-5 ">
        <div className="grid lg:grid-cols-2 gap-5 items-center" style={slideStyle}>

          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-purple-500 text-sm font-medium mb-6">
              <BookOpen size={16} />
              {slide.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {slide.heading}
              <span className="block tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-purple-500 bg-clip-text text-transparent">{slide.highlight}</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              {slide.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                as={Link}
                href={slide.primaryBtn.href}
                color="secondary"
                size="lg"
                className={"rounded-md bg-gradient-to-r from-pink-500 to-purple-500"}
                endContent={<ArrowRight size={18} />}
              >
                {slide.primaryBtn.label}
              </Button>

              <Button
                as={Link}
                href={slide.secondaryBtn.href}
                 className={"rounded-md"}
                variant="outline"
                size="lg"
              >
                {slide.secondaryBtn.label}
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-10">
              {slide.stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="font-bold text-2xl">{stat.value}</h3>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-violet-100 rounded-full blur-3xl opacity-40" />
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="relative w-full max-w-xl mx-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Dot indicators - centered below banner */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-violet-600"
                  : "w-2.5 h-2.5 bg-violet-200 hover:bg-violet-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}