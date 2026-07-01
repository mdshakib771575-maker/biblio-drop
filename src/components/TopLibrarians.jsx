"use client";

import { Card, Avatar, Button } from "@heroui/react";
import { FaStar } from "react-icons/fa";
import { BookOpen, MessageSquare, Trophy } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

const librarians = [
  {
    id: 1,
    badge: "Top Curator",
    name: "Dr. Amara Osei",
    role: "Head Librarian · Boston Public Library",
    image: "https://i.pravatar.cc/150?img=32",
    rating: "4.9",
    reviews: "312",
    books: "1,840",
  },
  {
    id: 2,
    badge: "Fastest Delivery",
    name: "Marcus Lindqvist",
    role: "Senior Librarian · Chicago Newberry",
    image: "https://i.pravatar.cc/150?img=12",
    rating: "4.8",
    reviews: "247",
    books: "1,420",
  },
  {
    id: 3,
    badge: "Best Collection",
    name: "Priya Nandakumar",
    role: "Academic Librarian · Harvard Library",
    image: "https://i.pravatar.cc/150?img=47",
    rating: "4.9",
    reviews: "389",
    books: "2,100",
  },
];

export default function TopLibrarians() {
  return (
    <section className="py-20 px-6 bg-[#f6f4fb]">
      <MotionWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#241542]">
            Top Librarians
          </h2>

          <p className="mt-5 text-xl text-gray-500 max-w-2xl mx-auto">
            Passionate book curators who hand-select titles and ensure your
            reading experience is exceptional.
          </p>
        </div>

        {/* Cards */}
        <MotionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {librarians.map((item) => (
            <Card
              key={item.id}
              className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm"
            >
              <Card.Content className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 font-semibold w-fit">
                  <FaStar size={14} />
                  {item.badge}
                </div>

                {/* Profile */}
                <div className="flex items-center gap-5">
                  <Avatar className="size-20 ring-4 ring-purple-200">
                    <Avatar.Image
                      src={item.image}
                      alt={item.name}
                    />
                    <Avatar.Fallback>
                      {item.name.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>

                  <div>
                    <h3 className="text-3xl font-bold text-[#241542]">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 rounded-3xl bg-purple-50 p-6">
                  <div className="text-center border-r border-purple-100">
                    <p className="text-3xl font-bold">
                      {item.rating}
                    </p>
                    <p className="text-gray-500 mt-1">Rating</p>
                  </div>

                  <div className="text-center border-r border-purple-100">
                    <p className="text-3xl font-bold">
                      {item.reviews}
                    </p>
                    <p className="text-gray-500 mt-1 flex justify-center items-center gap-1">
                      <MessageSquare size={15} />
                      Reviews
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-3xl font-bold">
                      {item.books}
                    </p>
                    <p className="text-gray-500 mt-1 flex justify-center items-center gap-1">
                      <BookOpen size={15} />
                      Books
                    </p>
                  </div>
                </div>

                {/* Button */}
                <Button
                  variant="outline"
                  className="w-full rounded-2xl border-purple-300 text-purple-600 font-bold text-lg py-6 hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:text-white"
                >
                  <Trophy size={18} />
                  View Profile
                </Button>
              </Card.Content>
            </Card>
          ))}
        </div>
        </MotionWrapper>
      </div>
    </MotionWrapper>
    </section>
  );
}