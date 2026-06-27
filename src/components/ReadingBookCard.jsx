import { Card, CardBody, Chip, Button } from "@heroui/react";
import Image from "next/image";
import { BookOpen, CalendarDays, User } from "lucide-react";

export default function ReadingBookCard({ book }) {
  return (
    <Card className="shadow-md hover:shadow-xl transition-all duration-300 border border-default-200">
      <div className="relative h-56 w-full">
        <Image
          src={book.bookImage}
          alt={book.bookTitle}
          fill
          unoptimized
          className="object-cover rounded-t-xl"
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

        <Button
          color="secondary"
          variant="flat"
          fullWidth
        >
          Write Review
        </Button>
      </div>
    </Card>
  );
}