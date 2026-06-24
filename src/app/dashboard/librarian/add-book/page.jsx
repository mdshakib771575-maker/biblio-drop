"use client";

import {
    Button,
    Card,
    CardBody,
    Input,
    Select,
    SelectItem,
    Textarea,
} from "@heroui/react";
import {
    BookOpen,
    User,
    DollarSign,
    Upload,
    Tag,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Logo from "@/components/Logo";
import DashboardHeading from "@/components/DashboardHeading";
import { uploadImage } from "@/utils/UploadImage";
import { AddBook } from "@/lib/api/acton";
import toast from "react-hot-toast";

const categories = [
    "Fiction",
    "Non-Fiction",
    "Science",
    "Technology",
    "History",
    "Biography",
    "Education",
];

export default function AddBookForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const imageFile = data.image[0];
            const imageUrl = await uploadImage(imageFile)
            const bookData = {
                title: data.title,
                author: data.author,
                category: data.category,
                deliveryFee: Number(data.deliveryFee),
                description: data.description,
                image: imageUrl,

            };

            // console.log(bookData);

            // API Call
             const resData = await AddBook(bookData)
        console.log(resData)
         if(resData.insetedId){
            toast.success(" Org Profile Added")
        }
            // await axios.post("/api/books", bookData)

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="max-w-5xl mx-auto shadow-md border ">
            <div className="p-8">
                <DashboardHeading title={"Add Book"} description={" Fill  in the Detail be Add a new book "}></DashboardHeading>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Book Title */}
                        <Input
                            label="Book Title"
                            placeholder="Book Title"

                            {...register("title", {
                                required: "Book title is required",
                            })}
                        />

                        {/* Author */}

                        <Input
                            label="Author Name"

                            placeholder="Author Name"

                            {...register("author", {
                                required: "Author name is required",
                            })}
                        />

                        {/* Category */}
                        <select
                            label="Category"
                            className="rounded-xl shadow"
                            placeholder="Select category"
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

                        {/* Delivery Fee */}
                        <Input
                            type="number"
                            label="Delivery Fee"
                            placeholder="50"

                            {...register("deliveryFee", {
                                required: true,
                            })}
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="text-sm font-medium block mb-2">
                            Book Cover Image
                        </label>

                        <label className="border-2 border-dashed rounded-xl p-6 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition">
                            <Upload size={24} />

                            <div>
                                <p className="font-medium">
                                    Upload Book Cover
                                </p>
                                <p className="text-sm text-gray-500">
                                    PNG, JPG up to 5MB
                                </p>
                            </div>

                            <Input
                                {...register("image", { required: "Image is Required" })}
                                id="image"
                                type="file"
                                className="hidden"
                                accept="image/*"

                            />
                        </label>
                    </div>

                    {/* Description */}
                    <textarea
                        {...register("description", {
                            required: "Description is required",
                        })}
                        rows={5}
                        placeholder="Write a short description about the book..."
                        className="w-full rounded-xl border border-default-200 p-3 outline-none focus:border-primary"
                    />
                    <div className="">


                        <Button
                            color="primary"
                            className={"bg-gradient-to-r from-pink-500 to-purple-500 w-full"}
                            type="submit"
                            isLoading={loading}
                        >
                            Add Book
                        </Button>
                    </div>
                </form>
            </div>
        </Card>
    );
}