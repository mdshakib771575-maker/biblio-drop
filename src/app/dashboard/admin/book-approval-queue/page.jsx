import DashboardHeading from '@/components/DashboardHeading';
import { Button, Chip, Table } from '@heroui/react';
import React from 'react';

const BookApprovalQueue = () => {
    return (
        <div>
            <DashboardHeading title={"Book Approval Queue"} description={"Review and approve pending book submissions."}></DashboardHeading>
        <Table className='mt-5'>
  <Table.ResizableContainer>
    <Table.Content
      aria-label="Book Approval Queue"
      className="min-w-[800px] "
    >
      <Table.Header>
        <Table.Column
          isRowHeader
          defaultWidth="1.5fr"
          id="title"
          minWidth={200}
        >
          Book Title
          <Table.ColumnResizer />
        </Table.Column>

        <Table.Column
          defaultWidth="1fr"
          id="author"
          minWidth={150}
        >
          Author
          <Table.ColumnResizer />
        </Table.Column>

        <Table.Column
          defaultWidth="1fr"
          id="owner"
          minWidth={140}
        >
          Librarian
          <Table.ColumnResizer />
        </Table.Column>

        <Table.Column
          defaultWidth="1fr"
          id="status"
          minWidth={150}
        >
          Status
          <Table.ColumnResizer />
        </Table.Column>

        <Table.Column
          defaultWidth="1fr"
          id="action"
          minWidth={200}
        >
          Actions
        </Table.Column>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Atomic Habits</Table.Cell>
          <Table.Cell>James Clear</Table.Cell>
          <Table.Cell>Rahim Ahmed</Table.Cell>
          <Table.Cell>
            <Chip color="warning" size="sm" variant="soft">
              Pending Approval
            </Chip>
          </Table.Cell>
          <Table.Cell>
            <div className="flex gap-2">
              <Button
                color="success"
                size="sm"
                variant="flat"
              >
                Approve
              </Button>

              <Button
                color="danger"
                size="sm"
                variant="flat"
              >
                Delete
              </Button>
            </div>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Clean Code</Table.Cell>
          <Table.Cell>Robert Martin</Table.Cell>
          <Table.Cell>Karim Uddin</Table.Cell>
          <Table.Cell>
            <Chip color="warning" size="sm" variant="soft">
              Pending Approval
            </Chip>
          </Table.Cell>
          <Table.Cell>
            <div className="flex gap-2">
              <Button
                color="success"
                size="sm"
                variant="flat"
              >
                Approve
              </Button>

              <Button
                color="danger"
                size="sm"
                variant="flat"
              >
                Delete
              </Button>
            </div>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>The Pragmatic Programmer</Table.Cell>
          <Table.Cell>Andrew Hunt</Table.Cell>
          <Table.Cell>Jahid Hasan</Table.Cell>
          <Table.Cell>
            <Chip color="warning" size="sm" variant="soft">
              Pending Approval
            </Chip>
          </Table.Cell>
          <Table.Cell>
            <div className="flex gap-2">
              <Button
                color="success"
                size="sm"
                variant="flat"
              >
                Approve
              </Button>

              <Button
                color="danger"
                size="sm"
                variant="flat"
              >
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

export default BookApprovalQueue;