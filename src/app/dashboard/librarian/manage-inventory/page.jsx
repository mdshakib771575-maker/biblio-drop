"use client";

import EditBookModal from "@/components/dashboard/librarian/EditBookModal";
import DashboardHeading from "@/components/DashboardHeading";
// import { DeleteBook } from "@/lib/api/action";
import { DeleteLibrarianBook } from "@/lib/api/acton";
import { serverFetch } from "@/lib/api/server";
import { Table, Chip, Button, AlertDialog } from "@heroui/react";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

function ManageInventoryTable() {
  const [booksData, setBook] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);


  useEffect(() => {
    const loadBooks = async () => {
      const data = await serverFetch("/api/books");
      setBook(data);
    };

    loadBooks();
  }, []);
  console.log(booksData)

  const handleDelete = async (id) => {
    try {
      const result = await DeleteLibrarianBook(id);

      if (result.success) {
        setBook((prev) =>
          prev.filter((book) => book._id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <DashboardHeading
        title={"Manage Inventory"}
        description={"All added books are shown here"}
      />

      <Table>
        <Table.ResizableContainer>
          <Table.Content
            aria-label="Manage Inventory Table"
            className="min-w-[900px]"
          >
            <Table.Header>
              <Table.Column>Book Title</Table.Column>
              <Table.Column>Author</Table.Column>
              <Table.Column>Category</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>

            <Table.Body>
              {booksData.map((book) => (
                <Table.Row key={book._id}>
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
                    <div className="flex gap-4">
                      <Button
                        isIconOnly
                        size="sm"
                        color="primary"
                        variant="flat"
                        onPress={() => setSelectedBook(book)}
                      >
                        <Pencil size={16} />
                      </Button>

                      <AlertDialog>
                        <Button
                          isIconOnly
                          size="sm"
                          color="danger"
                          className={"text-red-500"}
                          variant="flat"
                        >
                          <Trash2 size={16} />
                        </Button>

                        <AlertDialog.Backdrop>
                          <AlertDialog.Container>
                            <AlertDialog.Dialog>
                              <AlertDialog.CloseTrigger />

                              <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>
                                  Delete Book?
                                </AlertDialog.Heading>
                              </AlertDialog.Header>

                              <AlertDialog.Body>
                                <p>
                                  Are you sure you want to delete{" "}
                                  <strong>{book.title}</strong>?
                                </p>
                              </AlertDialog.Body>

                              <AlertDialog.Footer>
                                <Button slot="close" variant="outline">
                                  Cancel
                                </Button>

                                <Button
                                  slot="close"
                                  color="danger"
                                  variant="danger"
                                  onPress={() =>
                                    handleDelete(book._id)
                                  }
                                >
                                  Delete
                                </Button>
                              </AlertDialog.Footer>
                            </AlertDialog.Dialog>
                          </AlertDialog.Container>
                        </AlertDialog.Backdrop>
                      </AlertDialog>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ResizableContainer>
      </Table>
      <EditBookModal
        book={selectedBook}
        setBook={setBook}
        onClose={() => setSelectedBook(null)}
      />
    </>
  );
}

export default ManageInventoryTable;