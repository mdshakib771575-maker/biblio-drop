import DashboardHeading from '@/components/DashboardHeading';
import { Button, Chip, Table } from '@heroui/react';
import React from 'react';

const ManageAllBooksPage = () => {
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
                                minWidth={120}
                            >
                                Author
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column
                                id="owner"
                                defaultWidth="1fr"
                                minWidth={150}
                            >
                                Owner
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column
                                id="category"
                                defaultWidth="1fr"
                                minWidth={120}
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
                                minWidth={220}
                            >
                                Actions
                            </Table.Column>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Atomic Habits</Table.Cell>
                                <Table.Cell>James Clear</Table.Cell>
                                <Table.Cell>Rahim Ahmed</Table.Cell>
                                <Table.Cell>Self Help</Table.Cell>
                                <Table.Cell>
                                    <Chip color="success" size="sm" variant="soft">
                                        Published
                                    </Chip>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex gap-2">
                                        <Button color="warning" size="sm" variant="flat">
                                            Unpublish
                                        </Button>

                                        <Button color="danger" size="sm" variant="flat">
                                            Delete
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Clean Code</Table.Cell>
                                <Table.Cell>Robert Martin</Table.Cell>
                                <Table.Cell>Karim Uddin</Table.Cell>
                                <Table.Cell>Programming</Table.Cell>
                                <Table.Cell>
                                    <Chip color="warning" size="sm" variant="soft">
                                        Pending
                                    </Chip>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex gap-2">
                                        <Button color="success" size="sm" variant="flat">
                                            Publish
                                        </Button>

                                        <Button color="danger" size="sm" variant="flat">
                                            Delete
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Deep Work</Table.Cell>
                                <Table.Cell>Cal Newport</Table.Cell>
                                <Table.Cell>Shakib Hazari</Table.Cell>
                                <Table.Cell>Productivity</Table.Cell>
                                <Table.Cell>
                                    <Chip color="danger" size="sm" variant="soft">
                                        Unpublished
                                    </Chip>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex gap-2">
                                        <Button color="primary" size="sm" variant="flat">
                                            Publish
                                        </Button>

                                        <Button color="danger" size="sm" variant="flat">
                                            Delete
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>The Pragmatic Programmer</Table.Cell>
                                <Table.Cell>Andrew Hunt</Table.Cell>
                                <Table.Cell>Jahid Hasan</Table.Cell>
                                <Table.Cell>Programming</Table.Cell>
                                <Table.Cell>
                                    <Chip color="success" size="sm" variant="soft">
                                        Published
                                    </Chip>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex gap-2">
                                        <Button color="warning" size="sm" variant="flat">
                                            Unpublish
                                        </Button>

                                        <Button color="danger" size="sm" variant="flat">
                                            Delete
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Content>
                </Table.ResizableContainer>
            </Table>
        </div>
    );
};

export default ManageAllBooksPage;