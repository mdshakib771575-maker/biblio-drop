import BookCard from '@/components/BookCard';
import { serverFetch } from '@/lib/api/server';
import React from 'react';

const AllBooks = async() => {
    const books = await serverFetch("/api/books")
    console.log(res)
    return (
        <div>
           {books.map(book => <BookCard key={book._id} book={book}></BookCard>)} 
        </div>
    );
};

export default AllBooks;