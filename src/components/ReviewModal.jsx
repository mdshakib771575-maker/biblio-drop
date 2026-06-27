"use client";

import { useState } from "react";
import { Button, } from "@heroui/react";
import { Star, X } from "lucide-react";

export default function ReviewModal({ onSubmit }) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!rating) {
      alert("Please select a rating");
      return;
    }

    if (!comment.trim()) {
      alert("Please write a review");
      return;
    }

    onSubmit({
      rating,
      comment,
    });

    setRating(0);
    setComment("");
    setOpen(false);
  };

  return (
    <>
      <Button
        fullWidth
        color="secondary"
        className={"bg-gradient-to-r from-pink-500 to-purple-500"}
        onPress={() => setOpen(true)}
      >
        Write Review
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl w-full max-w-lg">

            {/* Header */}
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="text-xl font-bold">
                Write Review
              </h2>

              <button onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 space-y-6">

              <div>
                <p className="font-semibold mb-3">
                  Rating
                </p>

                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                    >
                      <Star
                        size={34}
                        className={
                          rating >= star
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                className="border w-100 h-40"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t p-5">
              {/* <Button
                variant="outline"
                onPress={() => setOpen(false)}
              >
                Cancel
              </Button> */}

              <Button
                color="secondary"
                className={"bg-gradient-to-r from-pink-500 to-purple-500"}
                onPress={handleSubmit}
              >
                Submit Review
              </Button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}