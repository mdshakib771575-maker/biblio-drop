"use client";

import { Card, CardBody, Chip, Button } from "@heroui/react";
import Image from "next/image";
import { CalendarDays, Pencil, Trash2 } from "lucide-react";
import { Star } from "lucide-react";

export default function ReviewCard({ review }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
    <Card className="shadow-md hover:shadow-xl transition-all border border-default-200">
      <div className="p-0">

        {/* Book Image */}
        <div className="relative h-52 w-full">
          <Image
            src={review.bookImage}
            alt={review.bookTitle}
            fill
            className="object-cover rounded-t-xl"
          />

          <Chip
            color="secondary"
            variant="flat"
            className="absolute top-3 right-3"
          >
            {review.bookCategory}
          </Chip>
        </div>

        <div className="p-5 space-y-4">

          <div>
            <h2 className="text-xl font-bold">
              {review.bookTitle}
            </h2>

            <p className="text-default-500">
              {review.bookAuthor}
            </p>
          </div>

          {/* Rating */}

          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={18}
                className={
                  review.rating >= star
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-default-300"
                }
              />
            ))}

            <span className="ml-2 text-sm text-default-500">
              ({review.rating}/5)
            </span>
          </div>

          {/* Comment */}

          <p className="text-default-600 leading-7">
            {review.comment}
          </p>

          {/* Date */}

          <div className="flex items-center gap-2 text-default-500 text-sm">
            <CalendarDays size={16} />

            <span>
              {new Date(review.createdAt).toLocaleDateString()}
            </span>
          </div>

          {/* Buttons */}

          <div className="flex gap-3 pt-2">

            <Button
              color="secondary"
              variant="flat"
              className="flex-1"
              startContent={<Pencil size={16} />}
            >
              Edit
            </Button>

            <Button
              color="danger"
              variant="flat"
              className="flex-1"
              startContent={<Trash2 size={16} />}
            >
              Delete
            </Button>

          </div>

        </div>

      </div>
    </Card>
    </div>
  );
}