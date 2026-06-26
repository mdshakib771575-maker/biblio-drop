import DashboardHeading from '@/components/DashboardHeading';
import { Chip, Table } from '@heroui/react';
import React from 'react';

const ViewAllTransactions = () => {
    return (
        <div>
            <DashboardHeading title={" View All Transactions"} description={" Monitor all payment transactions across the platform."}></DashboardHeading>
            <Table className='mt-5'>
                <Table.ResizableContainer>
                    <Table.Content
                        aria-label="Transactions Table"
                        className="min-w-[900px]"
                    >
                        <Table.Header>
                            <Table.Column
                                isRowHeader
                                id="transactionId"
                                defaultWidth="1.5fr"
                                minWidth={140}
                            >
                                Transaction ID
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column
                                id="user"
                                defaultWidth="1.2fr"
                                minWidth={160}
                            >
                                User Email
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column
                                id="librarian"
                                defaultWidth="1.2fr"
                                minWidth={160}
                            >
                                Librarian Email
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column
                                id="book"
                                defaultWidth="1fr"
                                minWidth={150}
                            >
                                Book
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column
                                id="amount"
                                defaultWidth="0.8fr"
                                minWidth={100}
                            >
                                Amount
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column
                                id="status"
                                defaultWidth="0.8fr"
                                minWidth={100}
                            >
                                Payment
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column
                                id="date"
                                defaultWidth="1fr"
                                minWidth={180}
                            >
                                Date
                            </Table.Column>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>TXN-458921</Table.Cell>
                                <Table.Cell>user1@gmail.com</Table.Cell>
                                <Table.Cell>rahim@gmail.com</Table.Cell>
                                <Table.Cell>Atomic Habits</Table.Cell>
                                <Table.Cell>$5</Table.Cell>
                                <Table.Cell>
                                    <Chip color="success" size="sm" variant="soft">
                                        Paid
                                    </Chip>
                                </Table.Cell>
                                <Table.Cell>25 Jun 2026</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>TXN-458922</Table.Cell>
                                <Table.Cell>user2@gmail.com</Table.Cell>
                                <Table.Cell>karim@gmail.com</Table.Cell>
                                <Table.Cell>Clean Code</Table.Cell>
                                <Table.Cell>$7</Table.Cell>
                                <Table.Cell>
                                    <Chip color="success" size="sm" variant="soft">
                                        Paid
                                    </Chip>
                                </Table.Cell>
                                <Table.Cell>24 Jun 2026</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>TXN-458923</Table.Cell>
                                <Table.Cell>user3@gmail.com</Table.Cell>
                                <Table.Cell>jahid@gmail.com</Table.Cell>
                                <Table.Cell>Deep Work</Table.Cell>
                                <Table.Cell>$6</Table.Cell>
                                <Table.Cell>
                                    <Chip color="warning" size="sm" variant="soft">
                                        Pending
                                    </Chip>
                                </Table.Cell>
                                <Table.Cell>23 Jun 2026</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>TXN-458924</Table.Cell>
                                <Table.Cell>user4@gmail.com</Table.Cell>
                                <Table.Cell>admin@gmail.com</Table.Cell>
                                <Table.Cell>The Pragmatic Programmer</Table.Cell>
                                <Table.Cell>$8</Table.Cell>
                                <Table.Cell>
                                    <Chip color="success" size="sm" variant="soft">
                                        Paid
                                    </Chip>
                                </Table.Cell>
                                <Table.Cell>22 Jun 2026</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Content>
                </Table.ResizableContainer>
            </Table>
        </div>
    );
};

export default ViewAllTransactions;