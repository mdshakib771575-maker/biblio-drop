"use client";

import { useState } from "react";
import { Button, Textarea } from "@heroui/react";
import { Star, X } from "lucide-react";

export default function EditReviewModal({
    review,
    onUpdate,
}) {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(review.rating);
    const [comment, setComment] = useState(review.comment);

    const handleSave = () => {
        onUpdate({
            rating,
            comment,
        });

        setOpen(false);
    };

    return (
        <>
            <Button
                color="secondary"
                variant="flat"
                onPress={() => setOpen(true)}
            >
                Edit
            </Button>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

                    <div className="bg-white dark:bg-zinc-900 rounded-xl w-full max-w-lg">

                        <div className="flex justify-between items-center border-b p-5">
                            <h2 className="text-xl font-bold">
                                Edit Review
                            </h2>

                            <button onClick={() => setOpen(false)}>
                                <X />
                            </button>
                        </div>

                        <div className="p-5 space-y-5">

                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => setRating(star)}
                                    >
                                        <Star
                                            size={30}
                                            className={
                                                rating >= star
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "text-gray-300"
                                            }
                                        />
                                    </button>
                                ))}
                            </div>

                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}


                                className="border w-100 h-40"
                            />

                        </div>

                        <div className="flex justify-end gap-3 border-t p-5">

                            <Button
                                variant="bordered"
                                onPress={() => setOpen(false)}
                            >
                                Cancel
                            </Button>

                            <Button
                                color="secondary"
                                onPress={handleSave}
                            >
                                Save
                            </Button>

                        </div>

                    </div>

                </div>
            )}
        </>
    );
}