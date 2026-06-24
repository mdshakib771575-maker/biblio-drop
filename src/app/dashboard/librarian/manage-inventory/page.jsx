"use client";

import { MyBooks } from "@/lib/api/data";
import { serverFetch } from "@/lib/api/server";
import { authClient } from "@/lib/auth-client";
import {
  Table,
  Chip,
  Button,
} from "@heroui/react";
import { Pencil, Trash2, EyeOff, Globe } from "lucide-react";
import { useEffect, useState } from "react";

import { AlertDialog } from "@heroui/react";

// const getStatusChip = (status) => {
//   if (status === "Published") {
//     return (
//       <Chip color="success" size="sm" variant="flat">
//         Published
//       </Chip>
//     );
//   } else if (status === "Pending Approval") {
//     return (
//       <Chip color="warning" size="sm" variant="flat">
//         Pending Approval
//       </Chip>
//     );
//   } else if (status === "Unpublished") {
//     return (
//       <Chip color="danger" size="sm" variant="flat">
//         Unpublished
//       </Chip>
//     );
//   } else {
//     return null;
//   }

// };
function ManageInventoryTable() {
  const [booksData, setBook] = useState([]);



  useEffect(() => {

    const loadBooks = async () => {
      const data = await serverFetch("/api/books")
      console.log(data)
      setBook(data);
    };

    loadBooks();
  }, []);

  console.log(booksData)

  return (
    <Table>
      <Table.ResizableContainer>
        <Table.Content
          aria-label="Manage Inventory Table"
          className="min-w-[900px]"
        >
          <Table.Header>
            <Table.Column
              isRowHeader
              id="title"
              defaultWidth="2fr"
              minWidth={220}
            >
              Book Title
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              id="author"
              defaultWidth="1fr"
              minWidth={180}
            >
              Author
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              id="category"
              defaultWidth="1fr"
              minWidth={150}
            >
              Category
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              id="status"
              defaultWidth="1fr"
              minWidth={150}
            >
              Status
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              id="actions"
              defaultWidth="2fr"
              minWidth={250}
            >
              Actions
            </Table.Column>
          </Table.Header>

          <Table.Body>
            {booksData.map((book, index) => (
              <Table.Row key={index}>
                <Table.Cell>{book.title}</Table.Cell>

                <Table.Cell>{book.author}</Table.Cell>

                <Table.Cell>{book.category}</Table.Cell>

                <Table.Cell>
                  {book.status === "Pending Approval" ? (
                    <Chip color="warning" size="sm" variant="flat">
                      Pending Approval
                    </Chip>
                  ) : (
                    <Chip color="success" size="sm" variant="flat">
                      Published
                    </Chip>
                  )}
                </Table.Cell>


                <Table.Cell>
                  <div className="flex gap-10">
                    <Button
                      isIconOnly
                      size="sm"
                      color="primary"
                      variant="flat"
                    >
                      <Pencil size={16} />
                    </Button>

                    {/* <Button
                      isIconOnly
                      size="sm"
                      color="danger"
                      variant="flat"
                      className={"text-red-500"}
                    >
                      <Trash2 size={16} />
                    </Button> */}
                    <AlertDialog>
                      <Button variant="flat" className={"text-red-500"}>  <Trash2 size={16} /></Button>
                      <AlertDialog.Backdrop>
                        <AlertDialog.Container>
                          <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                              <AlertDialog.Icon status="danger" />
                              <AlertDialog.Heading>Delete Book permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                              <p>
                                This will permanently delete <strong>My Awesome Book</strong> and all of its
                                data. This action cannot be undone.
                              </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                              <Button slot="close" variant="tertiary">
                                Cancel
                              </Button>
                              <Button slot="close" variant="danger">
                                Delete Book
                              </Button>
                            </AlertDialog.Footer>
                          </AlertDialog.Dialog>
                        </AlertDialog.Container>
                      </AlertDialog.Backdrop>
                    </AlertDialog>

                    {/* Pending book publish/unpublish korte parbe na */}
                    {/* {book.status !== "Pending Approval" && (
                      <Button
                        size="sm"
                        color={
                          book.status === "Published"
                            ? "warning"
                            : "success"
                        }
                        variant="flat"
                        startContent={
                          book.status === "Published" ? (
                            <EyeOff size={16} />
                          ) : (
                            <Globe size={16} />
                          )
                        }
                      >
                        {book.status === "Published"
                          ? "Unpublish"
                          : "Publish"}
                      </Button>
                    )} */}
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ResizableContainer>
    </Table>
  );
}
export default ManageInventoryTable;