"use client";

import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { RequestBook } from "@/lib/api/acton";
import toast from "react-hot-toast";
import { GrDeliver } from "react-icons/gr";

export default function RequestButton({ book }) {
  const { data: session } = authClient.useSession();

  const handleRequestBook = async () => {
    if (!session) {
      toast.error("Please login first");
      return;
    }

    const deliveryData = {
       bookId: book._id,
  bookTitle: book.title,
  bookAuthor: book.author,
  bookCategory: book.category,
  bookImage: book.image,

  ownerName: book.ownerName,
  ownerEmail: book.ownerEmail,

  userName: session.user.name,
  userEmail: session.user.email,

  deliveryFee: book.deliveryFee,
    };

    const result = await RequestBook(deliveryData);

    if (result.success) {
      toast.success("Request Sent Successfully");
    }
  };

  return (
    <Button
      color="secondary"
      size="lg"
      className="bg-gradient-to-r from-pink-500 to-purple-500"
      startContent={<GrDeliver size={20} />}
      onPress={handleRequestBook}
    >
      Request Delivery
    </Button>
  );
}