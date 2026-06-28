"use client"
import DashboardHeading from '@/components/DashboardHeading';
import { DeleteBook, UpdateBookStatus } from '@/lib/api/acton';
import { GetAllAdminBooks } from '@/lib/api/data';
import { AlertDialog, Button, Chip, Table } from '@heroui/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ManageAllBooksPage = () => {

    const [books, setBooks] = useState([]);

    const loadBooks = async () => {
        const data = await GetAllAdminBooks();
        setBooks(data);
    };

    useEffect(() => {
        loadBooks();
    }, []);

    console.log(books);

    const handleStatus = async (id, isPublished) => {
        const result = await UpdateBookStatus(id, isPublished);

        if (result.success) {
            toast.success(result.message);
            await loadBooks();
        }
    };

    const handleDelete = async (id) => {
        const result = await DeleteBook(id);

        if (result.success) {
            toast.success(result.message);
            await loadBooks();
        }
    };

    return (
        <div>
            <DashboardHeading title={"Manage All Books"} description={"   Manage all books across the platform."}></DashboardHeading>
            <Table>
                <Table.ResizableContainer>
                    <Table.Content
                        aria-label="Manage All Books"
                        className="min-w-[900px]"
                    >
                        <Table.Header>
                            <Table.Column
                                isRowHeader
                                id="title"
                                defaultWidth="1.5fr"
                                minWidth={140}
                            >
                                Book Title
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column
                                id="author"
                                defaultWidth="1fr"
                                minWidth={110}
                            >
                                Author
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column
                                id="owner"
                                defaultWidth="1fr"
                                minWidth={90}
                            >
                                Owner
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column
                                id="category"
                                defaultWidth="1fr"
                                minWidth={100}
                            >
                                Category
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column
                                id="status"
                                defaultWidth="1fr"
                                minWidth={90}
                            >
                                Status
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column
                                id="actions"
                                defaultWidth="1.5fr"
                                minWidth={240}
                            >
                                Actions
                            </Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {books.map((book) => (
                                <Table.Row key={book._id}>
                                    <Table.Cell>{book.title}</Table.Cell>

                                    <Table.Cell>{book.author}</Table.Cell>

                                    <Table.Cell>{book.ownerName}</Table.Cell>

                                    <Table.Cell>{book.category}</Table.Cell>

                                    <Table.Cell>
                                        <Chip
                                            size="sm"
                                            variant="soft"
                                            color={
                                                book.isPublished
                                                    ? "success"
                                                    : book.status === "Pending"
                                                        ? "warning"
                                                        : "danger"
                                            }
                                        >
                                            {book.isPublished
                                                ? "Published"
                                                : book.status === "Pending"
                                                    ? "Pending"
                                                    : "Unpublished"}
                                        </Chip>
                                    </Table.Cell>

                                    <Table.Cell>
                                        <div className="flex gap-2">
                                            {book.isPublished ? (
                                                <Button
                                                    color="warning"
                                                    size="sm"
                                                    variant="outline"
                                                    onPress={() => handleStatus(book._id, false)}
                                                >
                                                    Unpublish
                                                </Button>
                                            ) : (
                                                <Button
                                                    color="success"
                                                    size="sm"
                                                    variant="outline"
                                                    onPress={() => handleStatus(book._id, true)}
                                                >
                                                    Publish
                                                </Button>
                                            )}

                                            {/* <Button
                                                color="danger"
                                                size="sm"
                                                variant="flat"
                                                onPress={() => handleDelete(book._id)}
                                            >
                                                Delete
                                            </Button> */}
                                            <AlertDialog>
                                                <Button className={"text-red-500"} variant="outline">Delete</Button>
                                                <AlertDialog.Backdrop>
                                                    <AlertDialog.Container>
                                                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                                                            <AlertDialog.CloseTrigger />
                                                            <AlertDialog.Header>
                                                                <AlertDialog.Icon status="danger" />
                                                                <AlertDialog.Heading>Delete {book.title} permanently?</AlertDialog.Heading>
                                                            </AlertDialog.Header>
                                                            <AlertDialog.Body>
                                                                <p>
                                                                    This will permanently delete <strong>{book.title}</strong> and all of its
                                                                    data. This action cannot be undone.
                                                                </p>
                                                            </AlertDialog.Body>
                                                            <AlertDialog.Footer>
                                                                <Button slot="close" variant="tertiary">
                                                                    Cancel
                                                                </Button>
                                                                <Button slot="close" variant="danger"
                                                                  onPress={() => handleDelete(book._id)}>
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
        </div>
    );
};

export default ManageAllBooksPage;