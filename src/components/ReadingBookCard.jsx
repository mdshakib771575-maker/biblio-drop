import { Button, Card, Chip, useDisclosure } from "@heroui/react";
import Image from "next/image";
import { BookOpen, CalendarDays, User } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import { AddReview } from "@/lib/api/acton";
import toast from "react-hot-toast";
import ReviewModal from "./ReviewModal";



export default function ReadingBookCard({ book }) {
  const { data: session } = authClient.useSession();


    const handleReview = async (data) => {
    const reviewData = {
      bookId: book.bookId,
      bookTitle: book.bookTitle,
      bookImage: book.bookImage,
      bookAuthor: book.bookAuthor,
      bookCategory: book.bookCategory,

      userName: session.user.name,
      userEmail: session.user.email,

      rating: data.rating,
      comment: data.comment,
    };

    console.log(reviewData)

    const result = await AddReview(reviewData);

    if (result.success) {
      toast.success("Review Added Successfully");
    }
  };

  console.log("book",book)
  // const redBook = book[0];
  return (
    <div className="grid lg:grid-cols-3">
    <Card className="shadow-md hover:shadow-xl transition-all duration-300 border border-default-200">
      <div className="relative h-45 w-full">
        <Image
          src={book.bookImage}
          alt={book.bookTitle}
          fill
          // unoptimized
          className=" rounded-t-xl"
        />

        <Chip
          color="success"
          variant="flat"
          className="absolute top-3 right-3"
        >
          Read
        </Chip>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold line-clamp-1">
          {book.bookTitle}
        </h2>

        <div className="flex items-center gap-2 text-default-500 text-sm">
          <User size={16} />
          <span>{book.bookAuthor}</span>
        </div>

        <div className="flex items-center gap-2 text-default-500 text-sm">
          <BookOpen size={16} />
          <span>{book.bookCategory}</span>
        </div>

        <div className="flex items-center gap-2 text-default-500 text-sm">
          <CalendarDays size={16} />
          <span>
            {new Date(book.requestDate).toLocaleDateString()}
          </span>
        </div>

       
            <ReviewModal onSubmit={handleReview} />
      </div>
    </Card>
   
    </div>
  );
}