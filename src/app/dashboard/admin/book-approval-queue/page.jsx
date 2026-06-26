// "use client"
// import DashboardHeading from '@/components/DashboardHeading';
// import { Button, Chip, Table } from '@heroui/react';
// import React, { useEffect, useState } from 'react';

// const BookApprovalQueue = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     loadPendingBooks();
//   }, []);
//   console.log(books)

//   const loadPendingBooks = async () => {
//     const res = await fetch(
//       "http://localhost:5000/api/admin/book-approval"
//     );
//     const data = await res.json();
//     setBooks(data);

//   };
    
//       const handleApprove = async (id) => {
//       const res = await fetch(
//         `http://localhost:5000/api/admin/book-approval/${id}`,
//         {
//           method: "PATCH",
//         }
//       );

//       const data = await res.json();

//       if (data.modifiedCount > 0) {
//         loadPendingBooks();
//       }
//     };


//    const handleDelete = async (id) => {
//       const res = await fetch(
//         `http://localhost:5000/api/books/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       const data = await res.json();

//       if (data.success) {
//         loadPendingBooks();
//       }
//     };

//   return (
//     <div>
//       <DashboardHeading title={"Book Approval Queue"} description={"Review and approve pending book submissions."}></DashboardHeading>
//       <Table className='mt-5'>
//         <Table.ResizableContainer>
//           <Table.Content
//             aria-label="Book Approval Queue"
//             className="min-w-[1100px] "
//           >
//             <Table.Header>
//               <Table.Column
//                 isRowHeader
             
//                 id="title"
//                 minWidth={140}
//               >
//                 Book Title
//                 <Table.ColumnResizer />
//               </Table.Column>

//               <Table.Column
               
//                 id="author"
//                 minWidth={140}
//               >
//                 Author
//                 <Table.ColumnResizer />
//               </Table.Column>

//               <Table.Column
//                 defaultWidth="1fr"
//                 id="owner"
//                 minWidth={140}
//               >
//                 Librarian
//                 <Table.ColumnResizer />
//               </Table.Column>

//               <Table.Column
//                 defaultWidth="1fr"
//                 id="status"
//                 minWidth={150}
//               >
//                 Status
//                 <Table.ColumnResizer />
//               </Table.Column>

//               <Table.Column
//                 defaultWidth="1fr"
//                 id="action"
//                 minWidth={200}
//               >
//                 Actions
//               </Table.Column>
//             </Table.Header>

//        <Table.Body>
//   {books.length === 0 ? (
//     <Table.Row>
//       <Table.Cell>No pending books found.</Table.Cell>
//       <Table.Cell>-</Table.Cell>
//       <Table.Cell>-</Table.Cell>
//       <Table.Cell>-</Table.Cell>
//       <Table.Cell>-</Table.Cell>
//     </Table.Row>
//   ) : (
//     books.map((book) => (
//       <Table.Row key={book._id}>
//         <Table.Cell>{book.title}</Table.Cell>

//         <Table.Cell>{book.author}</Table.Cell>

//         <Table.Cell>{book.ownerName || "N/A"}</Table.Cell>

//         <Table.Cell>
//           <Chip color="warning" size="sm" variant="soft">
//             {book.status}
//           </Chip>
//         </Table.Cell>

//         <Table.Cell>
//           <div className="flex items-center gap-2">
//             <Button
//               color="success"
//               size="sm"
//               variant="outline"
//               onPress={() => handleApprove(book._id)}
//             >
//               Approve & Publish
//             </Button>

//             <Button
//               color="danger"
//               size="sm"
//               variant="outline"
//               onPress={() => handleDelete(book._id)}
//             >
//               Delete
//             </Button>
//           </div>
//         </Table.Cell>
//       </Table.Row>
//     ))
//   )}
// </Table.Body>
//           </Table.Content>
//         </Table.ResizableContainer>
//       </Table>
//     </div>
//   );
// };

export default BookApprovalQueue;