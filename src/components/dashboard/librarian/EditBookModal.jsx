"use client";

import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { uploadImage } from "@/utils/UploadImage";
import { UpdateLibrarianBook } from "@/lib/api/acton";

const categories = [
  "Fiction",
  "Non-Fiction",
  "Science",
  "Technology",
  "History",
  "Biography",
  "Education",
];

export default function EditBookModal({
  book,
  onClose,
  setBook,
}) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (book) {
      reset({
        title: book.title,
        author: book.author,
        category: book.category,
        deliveryFee: book.deliveryFee,
        description: book.description,
      });
    }
  }, [book, reset]);

  if (!book) return null;

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      let imageUrl = book.image;

      // New image upload to ImageBB
      if (data.image?.[0]) {
        imageUrl = await uploadImage(data.image[0]);
      }

      const updatedBook = {
        title: data.title,
        author: data.author,
        category: data.category,
        deliveryFee: Number(data.deliveryFee),
        description: data.description,
        image: imageUrl,
      };

      const result = await UpdateLibrarianBook(
        book._id,
        updatedBook
      );

      if (result.success) {
        toast.success("Book Updated Successfully");

        setBook((prev) =>
          prev.map((item) =>
            item._id === book._id
              ? { ...item, ...updatedBook }
              : item
          )
        );

        onClose();
      }
    } catch (error) {
      // console.log(error);
      toast.error("Update Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto p-4 mt-2">
      <div className="bg-white rounded-xl p-6 w-full max-w-xl">
        <h2 className="text-xl font-bold mb-5 text-pink-600">
          Edit Book
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 "
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
            <label htmlFor="">Book Title</label>
            <Input
              label="Book Title"
              {...register("title", {
                required: true,
              })}
            />
            </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="">Author</label>
            <Input
              label="Author Name"
              {...register("author", {
                required: true,
              })}
            />
            </div>

            <div className="flex flex-col gap-1">

         
                 <label htmlFor="">Cartegory</label>
            <select
              className="border rounded-xl p-3"
              {...register("category", {
                required: true,
              })}
            >
              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
               </div>
             <div className="flex flex-col gap-1">

                <label htmlFor="">Delivery Fee</label>
            <Input
              type="number"
              label="Delivery Fee"
              {...register("deliveryFee", {
                required: true,
              })}
            />
             </div>
          </div>

          <div>
            <label className="font-medium block mb-2">
              Book Cover Image
            </label>

            <Input
              type="file"
              accept="image/*"
              {...register("image")}
            />
          </div>

          {/* {book.image && (
            <img
              src={book.image}
              alt={book.title}
              className="w-28 h-20 object-cover rounded-lg border"
            />
          )} */}
          <div className="flex flex-col gap-1">
                <label htmlFor="">Description</label>
          
          <textarea
            rows={5}
            className="w-full border rounded-xl p-3"
            placeholder="Book Description"
            {...register("description", {
              required: true,
            })}
          />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              color="primary"
              type="submit"
              isLoading={loading}
              className={"bg-gradient-to-r from-pink-500 to-purple-500"}
            >
              Update Book
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}