
// import BookCard from "@/components/BookCard";
import { serverFetch } from "@/lib/api/server";
import BookCard from "./BookCard";
import MotionWrapper from "./MotionWrapper";


const FeaturedBooks = async () => {
  const booksData = await serverFetch("/api/books");
 
  console.log("booksData",booksData)
  return (
    <div  className="w-11/12 mx-auto mb-10">
      <MotionWrapper>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Featured Books</h2>
        <p className="text-default-500 mt-2">
          Discover our latest and most popular books.
        </p>
      </div>
      </MotionWrapper>
      <MotionWrapper>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5">
        {booksData && booksData?.data?.slice(0,6).map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
</MotionWrapper>
    </div>
  );
};

export default FeaturedBooks;