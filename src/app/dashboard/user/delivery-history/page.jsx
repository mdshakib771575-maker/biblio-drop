"use client"
import DashboardHeading from '@/components/DashboardHeading';
import { serverFetch } from '@/lib/api/server';
import { authClient } from '@/lib/auth-client';
import { Chip, Table } from '@heroui/react';
import React, { useEffect, useState } from 'react';

const DeliveryHistory = () => {
    const [history, setHistory] = useState([]);
    const { data: session } = authClient.useSession();

    useEffect(() => {
        if (!session?.user?.email) return;

        const loadHistory = async () => {
            const data = await serverFetch(
                `/api/user/history/${session.user.email}`
            );

            setHistory(data);
        };

        loadHistory();
    }, [session]);
    return (
        <div>
            <DashboardHeading title={"DeliveryHistory"} description={"Dashboard User DeliveryHistory"}></DashboardHeading>
            <Table>
                <Table.ResizableContainer>
                    <Table.Content aria-label="Table with resizable columns" className="min-w-[900px]">
                        <Table.Header>
                            <Table.Column isRowHeader defaultWidth="1fr" id="name" minWidth={160}>
                                Book Title
                                <Table.ColumnResizer />
                            </Table.Column>
                            <Table.Column defaultWidth="1fr" id="role" minWidth={220}>
                                Delivery Fee
                                <Table.ColumnResizer />
                            </Table.Column>

                            <Table.Column defaultWidth="1fr" id="email" minWidth={200}>
                                Date
                            </Table.Column>
                            <Table.Column defaultWidth="1fr" id="status" minWidth={100}>
                                Status
                                <Table.ColumnResizer />
                            </Table.Column>
                        </Table.Header>
                        <Table.Body emptyContent={"No History Found"}>
                            {history.map((item) => (
                                <Table.Row key={item._id}>
                                    <Table.Cell>{item.bookTitle}</Table.Cell>

                                    <Table.Cell>${item.deliveryFee}</Table.Cell>

                                    <Table.Cell>
                                        {new Date(item.requestDate).toLocaleDateString()}
                                    </Table.Cell>

                                    <Table.Cell>
                                        <Chip
                                            color={
                                                item.status === "Pending"
                                                    ? "warning"
                                                    : item.status === "Dispatched"
                                                        ? "primary"
                                                        : "success"
                                            }
                                            variant="flat"
                                        >
                                            {item.status}
                                        </Chip>
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

export default DeliveryHistory;