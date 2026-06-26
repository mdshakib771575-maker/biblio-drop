import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
  console.log(book.image)
  return (
    <div>
      <Card className=" border justify-center mt-5 hover:scale-105 transition duration-800 h-full">
            <div>
                <Image src={book.image} unoptimized alt={book.author} width={400} height={200} className='w-200 h-[200px] rounded-2xl'></Image>
            </div>
            <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                    <Card.Title className="pr-8 font-bold text-2xl">{book.title}</Card.Title>
                    <Card.Description>
                        {book.description}
                    </Card.Description>


                </Card.Header>
                <Card.Footer className="mt-auto flex w-full  items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">Only ${book.deliveryFee}</span>
                        <span className="text-xs text-muted">{book.category}</span>
                    </div>
                    <p className="text-purple-500 border rounded-2xl px-2 text-sm bg-purple-100">{book.status}</p>
                </Card.Footer>
            </div>
        </Card>
    </div>
  );
};

export default BookCard;