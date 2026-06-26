import BookCard from '@/components/BookCard';
import { serverFetch } from '@/lib/api/server';
import React from 'react';

const AllBooks = async() => {
    const books = await serverFetch("/api/books");
    console.log(books)
 
    return (
        <div className='grid grid-cols-4 gap-5 w-5xl mx-auto mb-10'>
           {books.map(book => <BookCard key={book._id} book={book}></BookCard>)} 
        </div>
    );
};

export default AllBooks;