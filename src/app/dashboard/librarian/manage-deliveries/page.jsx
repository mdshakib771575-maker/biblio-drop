"use client";

import { useEffect, useState, useCallback } from "react";
import { Button, Chip, Table } from "@heroui/react";
import DashboardHeading from "@/components/DashboardHeading";
// import { serverFetch } from "@/lib/api/server";

export default function ManageDeliveriesTable() {
  const [deliveries, setDeliveries] = useState([]);

  const loadDeliveriesBooks = async () => {
    const res = await fetch("http://localhost:5000/api/deliveries");
    const data = await res.json();
    setDeliveries(data);
  };

  useEffect(() => {
    loadDeliveriesBooks();
  }, []);


  // useEffect(() => {
  //   loadDeliveriesBooks();
  // }, []);

  const updateStatus = async (_id, newStatus) => {
    try {
      const res = await fetch(`http://localhost:5000/api/deliveries/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      });

      if (res.ok) {
        await loadDeliveriesBooks();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "warning";
      case "Dispatched":
        return "primary";
      case "Delivered":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <>
     <DashboardHeading title={"Manage Deliveries"} description={"all user deliverids request here"}></DashboardHeading>
    <Table>
      <Table.ResizableContainer>
        <Table.Content
          aria-label="Manage Deliveries Table"
          className="min-w-[850px]"
        >
          <Table.Header>
            <Table.Column
              isRowHeader
              id="client"
              defaultWidth="1fr"
              minWidth={180}
            >
              CLIENT
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              id="book"
              defaultWidth="1fr"
              minWidth={220}
            >
              BOOK
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              id="date"
              defaultWidth="1fr"
              minWidth={150}
            >
              DATE
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              id="status"
              defaultWidth="1fr"
              minWidth={150}
            >
              STATUS
              <Table.ColumnResizer />
            </Table.Column>

            <Table.Column
              id="actions"
              defaultWidth="1fr"
              minWidth={180}
            >
              ACTIONS
            </Table.Column>
          </Table.Header>

          <Table.Body emptyContent={"No deliveries found"}>
            {deliveries.map((delivery) => (
              <Table.Row key={delivery._id}>
                <Table.Cell> <div> <p>{delivery.ownerName}</p><p className="text-sm">{delivery.userEmail}</p></div></Table.Cell>

                <Table.Cell>{delivery.bookTitle}</Table.Cell>

                <Table.Cell>
                  {delivery.requestDate
                    ? new Date(delivery.requestDate).toLocaleDateString()
                    : "N/A"}
                </Table.Cell>

                <Table.Cell>
                  <Chip
                    color={getStatusColor(delivery.status)}
                    variant="soft"
                    size="sm"
                  >
                    {delivery.status}
                  </Chip>
                </Table.Cell>

                <Table.Cell>
                  {delivery.status === "Pending" && (
                    <Button
                      size="sm"
                      color="primary"
                      onPress={() =>
                        updateStatus(
                          delivery._id,
                          "Dispatched"
                        )
                      }
                    >
                      Dispatch
                    </Button>
                  )}

                  {delivery.status === "Dispatched" && (
                    <Button
                      size="sm"
                      color="success"
                      onPress={() =>
                        updateStatus(
                          delivery._id,
                          "Delivered"
                        )
                      }
                    >
                      Deliver
                    </Button>
                  )}

                  {delivery.status === "Delivered" && (
                    <Button
                      size="sm"
                      color="success"
                      isDisabled
                    >
                      Completed
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ResizableContainer>
    </Table>
    </>
  );
}