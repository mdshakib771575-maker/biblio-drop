
import RequestButton from '@/components/RequestButton';
import { RequestBook } from '@/lib/api/acton';
import { serverFetch } from '@/lib/api/server';
import { authClient } from '@/lib/auth-client';
import { Button, Card, Chip } from '@heroui/react';
import { BookOpen, Calendar, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaDollarSign, FaHeart } from 'react-icons/fa';
import { GrDeliver } from 'react-icons/gr';

const BookDetailsPage = async ({params}) => {

      const { id } = await params;

      const book = await serverFetch(`/api/books/${id}`)
      // console.log(book)

    return (
        <div>
             <Card className="max-w-6xl mx-auto shadow-xl border border-default-200">
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Image */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
            <Image
              src={book.image}
              alt={book.title}
              fill
              unoptimized
              className="object-cover"
            />

            <Chip
              color="success"
              variant="flat"
              className="absolute top-4 right-4"
            >
              Published
            </Chip>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">

            <Chip
              color="secondary"
              variant="light"
              className="w-fit mb-3"
            >
              {book.category}
            </Chip>

            <h1 className="text-4xl font-bold">
              {book.title}
            </h1>

            <p className="text-default-500 text-lg mt-2">
              by <span className="font-semibold">{book.author}</span>
            </p>

            <p className="mt-6 text-default-600 leading-8">
              {book.description}
            </p>

            <div className="space-y-4 mt-8">

              <div className="flex items-center gap-3">
                <FaDollarSign className="text-warning text-lg" />
                <span className="font-semibold">
                  Delivery Fee:
                </span>

                <span className="text-warning font-bold text-xl">
                  ${book.deliveryFee}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <User size={18} />
                <span className="font-semibold">
                  Listed by:
                </span>

                <span>{book.ownerName}</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar size={18} />
                <span className="font-semibold">
                  Added:
                </span>

                <span>
                  {new Date(book.createdAt).toLocaleDateString()}
                </span>
              </div>

            </div>

            <div className="flex flex-wrap gap-4 mt-10">

              {/* <Button
                color="secondary"
                size="lg"
                className={"bg-gradient-to-r from-pink-500 to-purple-500 "}
                // startContent={}
              >
               <GrDeliver size={24} /> Request Delivery
              </Button> */}
              <RequestButton book={book}></RequestButton>

              <Button
                variant="outline"
                size="lg"
                className={"text-purple-500"}
              >
               <FaHeart /> Add to Wishlist
              </Button>

            </div>

          </div>
        </div>
      </div>
    </Card>
        </div>
    );
};

export default BookDetailsPage;