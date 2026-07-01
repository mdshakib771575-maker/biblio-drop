import BookCard from '@/components/BookCard';
import FilterPanel from '@/components/FilterPanal';
import { serverFetch } from '@/lib/api/server';
import { Pagination } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const AllBooks = async ({ searchParams }) => {

   const { page = 1, search = "", category = "", author = "" } = await searchParams;

    // if (!page) {
    //     page = 1;
    // }
    // console.log(page)
    // const booksData = await serverFetch(`/api/books?page=${page}`);
    const booksData = await serverFetch(`/api/books?page=${page}&search=${search}&category=${category}&author=${author}`
);
    // console.log("databooks",booksData)
   
    const pages =[];
    const bookspage = booksData?.page;
    const totalPages = booksData?.totalPage;

    for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
    }

    // console.log(books)

    return (
        <div >
            <div>
                <FilterPanel></FilterPanel>
            </div>
            <div className=' w-11/12 mx-auto mb-15 grid md:grid-cols-3 lg:grid-cols-4 gap-5  '>

                {booksData.data?.map(book => <BookCard key={book._id} book={book}></BookCard>)}
            </div>

            <div className='my-10'>
                <Pagination size="sm0" className='justify-center' >
                    <Pagination.Content>
                        <Pagination.Item>
                            <Pagination.Previous
                                isDisabled={bookspage === 1}
                            >
                                <Link className='flex gap-2' href={`/all-books?page=${bookspage - 1}&search=${search}&category=${category}&author=${author}`}>
                                <Pagination.PreviousIcon />
                                Prev
                                </Link>
                            </Pagination.Previous>
                        </Pagination.Item>
                        {pages.map((p) => (
                            <Pagination.Item key={p}>
                                <Link href={`/all-books?page=${p}&search=${search}&category=${category}&author=${author}`}>
                                <Pagination.Link isActive={p === bookspage} >
                                    {p}
                                </Pagination.Link>
                                </Link>
                            </Pagination.Item>
                        ))}
                        <Pagination.Item>
                            <Pagination.Next
                                isDisabled={bookspage === totalPages}
                              
                            >
                                <Link className='flex gap-2'  href={`/all-books?page=${bookspage + 1}&search=${search}&category=${category}&author=${author}`}  >
                                Next
                                <Pagination.NextIcon />
                                </Link>
                            </Pagination.Next>
                        </Pagination.Item>
                    </Pagination.Content>
                </Pagination>
            </div>



        </div>
    );
};

export default AllBooks;
export const dynamic = "force-dynamic";