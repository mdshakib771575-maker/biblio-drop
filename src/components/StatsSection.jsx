import { BookOpen, Users, Library, Star } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

const stats = [
  {
    icon: BookOpen,
    value: "200K+",
    label: "Books Available",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Active Readers",
  },
  {
    icon: Library,
    value: "120+",
    label: "Libraries",
  },
  {
    icon: Star,
    value: "4.9★",
    label: "Avg. Rating",
  },
];

export default function StatsSection() {
  return (
    <section className="">
      <MotionWrapper>
      <div className=" bg-gradient-to-r from-fuchsia-600 via-violet-600 to-purple-600 px-8 py-12 shadow-2xl">
        <div className="grid grid-cols-2 gap-10 text-center text-white lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="space-y-3">
                <div className="flex justify-center">
                  <Icon size={34} strokeWidth={2} />
                </div>

                <h2 className="text-5xl font-extrabold">
                  {item.value}
                </h2>

                <p className="text-lg text-white/90">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      </MotionWrapper>
    </section>
  );
}