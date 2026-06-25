"use client"
import { Button, Chip, Table } from '@heroui/react';
import React from 'react';

const ManageUsers = () => {
    return (
        <div>
            <Table>
  <Table.ResizableContainer>
    <Table.Content
      aria-label="Manage Users Table"
      className="min-w-[900px]"
    >
      <Table.Header>
        <Table.Column
          isRowHeader
          id="name"
          defaultWidth="1fr"
          minWidth={140}
        >
          Name
          <Table.ColumnResizer />
        </Table.Column>

        <Table.Column
          id="email"
          defaultWidth="1.5fr"
          minWidth={150}
        >
          Email
          <Table.ColumnResizer />
        </Table.Column>

        <Table.Column
          id="role"
          defaultWidth="1fr"
          minWidth={100}
        >
          Role
          <Table.ColumnResizer />
        </Table.Column>

        <Table.Column
          id="status"
          defaultWidth="1fr"
          minWidth={100}
        >
          Status
          <Table.ColumnResizer />
        </Table.Column>

        <Table.Column
          id="actions"
          defaultWidth="1.5fr"
          minWidth={480}
        >
          Actions
        </Table.Column>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Shakib Hazari</Table.Cell>
          <Table.Cell>shakib@gmail.com</Table.Cell>
          <Table.Cell>
            <Chip color="primary" size="sm" variant="soft">
              User
            </Chip>
          </Table.Cell>
          <Table.Cell>
            <Chip color="success" size="sm" variant="soft">
              Active
            </Chip>
          </Table.Cell>
          <Table.Cell>
            <div className="flex gap-2">
              <Button
                size="sm"
                color="secondary"
                variant="flat"
              >
                Make Librarian
              </Button>

              <Button
                size="sm"
                color="primary"
                variant="flat"
              >
                Make Admin
              </Button>

              <Button
                size="sm"
                color="danger"
                variant="flat"
              >
                Delete
              </Button>
            </div>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Rahim Ahmed</Table.Cell>
          <Table.Cell>rahim@gmail.com</Table.Cell>
          <Table.Cell>
            <Chip color="warning" size="sm" variant="soft">
              Librarian
            </Chip>
          </Table.Cell>
          <Table.Cell>
            <Chip color="success" size="sm" variant="soft">
              Active
            </Chip>
          </Table.Cell>
          <Table.Cell>
            <div className="flex gap-2">
              <Button
                size="sm"
                color="primary"
                variant="flat"
              >
                Make Admin
              </Button>

              <Button
                size="sm"
                color="danger"
                variant="flat"
              >
                Delete
              </Button>
            </div>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Admin User</Table.Cell>
          <Table.Cell>admin@gmail.com</Table.Cell>
          <Table.Cell>
            <Chip color="danger" size="sm" variant="soft">
              Admin
            </Chip>
          </Table.Cell>
          <Table.Cell>
            <Chip color="success" size="sm" variant="soft">
              Active
            </Chip>
          </Table.Cell>
          <Table.Cell>
            <Button
              size="sm"
              color="default"
              variant="flat"
              isDisabled
            >
              Protected
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Content>
  </Table.ResizableContainer>
</Table>
        </div>
    );
};

export default ManageUsers;