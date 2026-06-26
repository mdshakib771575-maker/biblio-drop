// "use client";

// import EditBookModal from "@/components/dashboard/librarian/EditBookModal";
// import DashboardHeading from "@/components/DashboardHeading";
// // import { DeleteBook } from "@/lib/api/action";
// import { DeleteLibrarianBook } from "@/lib/api/acton";
// import { serverFetch } from "@/lib/api/server";
// import { authClient } from "@/lib/auth-client";
// import { Table, Chip, Button, AlertDialog } from "@heroui/react";
// import { Pencil, Trash2 } from "lucide-react";
// import { useEffect, useState } from "react";

// function ManageInventoryTable() {
//   const { data: session } = authClient.useSession();
//   const [booksData, setBook] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);


//   useEffect(() => {
//   if (!session?.user?.email) return;

//   const loadBooks = async () => {
//     const data = await serverFetch(
// `/api/librarian/books/${session.user.email}`
//     );

//     setBook(data);
//   };

//   loadBooks();
// }, [session]);
//   console.log(booksData)

//   const handleDelete = async (id) => {
//     try {
//       const result = await DeleteLibrarianBook(id);

//       if (result.success) {
//         setBook((prev) =>
//           prev.filter((book) => book._id !== id)
//         );
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };



//   return (
//     <>
//       <DashboardHeading
//         title={"Manage Inventory"}
//         description={"All added books are shown here"}
//       />

//       <Table>
//         <Table.ResizableContainer>
//           <Table.Content
//             aria-label="Manage Inventory Table"
//             className="min-w-[800px]"
//           >

//             <Table.Header>
//               <Table.Column
//                 isRowHeader
//                 defaultWidth="2fr"
//                 id="title"
//                 minWidth={200}
//               >
//                 Book Title
//                 <Table.ColumnResizer />
//               </Table.Column>

//               <Table.Column
//                 defaultWidth="1.5fr"
//                 id="author"
//                 minWidth={180}
//               >
//                 Author
//                 <Table.ColumnResizer />
//               </Table.Column>

//               <Table.Column
//                 defaultWidth="1fr"
//                 id="category"
//                 minWidth={150}
//               >
//                 Category
//                 <Table.ColumnResizer />
//               </Table.Column>

//               <Table.Column
//                 defaultWidth="1fr"
//                 id="status"
//                 minWidth={160}
//               >
//                 Status
//                 <Table.ColumnResizer />
//               </Table.Column>

//               <Table.Column
//                 defaultWidth="1fr"
//                 id="actions"
//                 minWidth={180}
//               >
//                 Actions
//               </Table.Column>
//             </Table.Header>
//             <Table.Body>
//               {booksData.map((book) => (
//                 <Table.Row key={book._id}>
//                   <Table.Cell>{book.title}</Table.Cell>

//                   <Table.Cell>{book.author}</Table.Cell>

//                   <Table.Cell>{book.category}</Table.Cell>

//                   <Table.Cell>
//                     {book.status === "Pending Approval" ? (
//                       <Chip color="warning" size="sm" variant="flat">
//                         Pending Approval
//                       </Chip>
//                     ) : (
//                       <Chip color="success" size="sm" variant="flat">
//                         Published
//                       </Chip>
//                     )}
//                   </Table.Cell>

//                   <Table.Cell>
//                     <div className="flex gap-4">
//                       <Button
//                         isIconOnly
//                         size="sm"
//                         color="primary"
//                         variant="flat"
//                         onPress={() => setSelectedBook(book)}
//                       >
//                         <Pencil size={16} />
//                       </Button>

//                       <AlertDialog>
//                         <Button
//                           isIconOnly
//                           size="sm"
//                           color="danger"
//                           className={"text-red-500"}
//                           variant="flat"
//                         >
//                           <Trash2 size={16} />
//                         </Button>

//                         <AlertDialog.Backdrop>
//                           <AlertDialog.Container>
//                             <AlertDialog.Dialog>
//                               <AlertDialog.CloseTrigger />

//                               <AlertDialog.Header>
//                                 <AlertDialog.Icon status="danger" />
//                                 <AlertDialog.Heading>
//                                   Delete Book?
//                                 </AlertDialog.Heading>
//                               </AlertDialog.Header>

//                               <AlertDialog.Body>
//                                 <p>
//                                   Are you sure you want to delete{" "}
//                                   <strong>{book.title}</strong>?
//                                 </p>
//                               </AlertDialog.Body>

//                               <AlertDialog.Footer>
//                                 <Button slot="close" variant="outline">
//                                   Cancel
//                                 </Button>

//                                 <Button
//                                   slot="close"
//                                   color="danger"
//                                   variant="danger"
//                                   onPress={() =>
//                                     handleDelete(book._id)
//                                   }
//                                 >
//                                   Delete
//                                 </Button>
//                               </AlertDialog.Footer>
//                             </AlertDialog.Dialog>
//                           </AlertDialog.Container>
//                         </AlertDialog.Backdrop>
//                       </AlertDialog>
//                     </div>
//                   </Table.Cell>
//                 </Table.Row>
//               ))}
//             </Table.Body>
//           </Table.Content>
//         </Table.ResizableContainer>
//       </Table>
//       <EditBookModal
//         book={selectedBook}
//         setBook={setBook}
//         onClose={() => setSelectedBook(null)}
//       />
//     </>
//   );
// }

// export default ManageInventoryTable;