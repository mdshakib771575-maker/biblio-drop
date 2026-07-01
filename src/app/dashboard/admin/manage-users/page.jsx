"use client"
import DashboardHeading from '@/components/DashboardHeading';
import { DeleteUser, UpdateUserRole } from '@/lib/api/acton';
import { GetUsers } from '@/lib/api/data';
import { AlertDialog, Button, Chip, Table } from '@heroui/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ManageUsers = () => {

  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const data = await GetUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleRole = async (id, role) => {
    const result = await UpdateUserRole(id, role);

    if (result.success) {
      toast.success("Role Updated Successfully");
      await loadUsers();
    }
  };

  const handleDelete = async (id) => {
    const result = await DeleteUser(id);

    if (result.success) {
      toast.success("User Deleted Successfully");
      await loadUsers();
    }
  };

  // console.log(users)

  return (
    <div>
      <DashboardHeading title={" Manage Users"} description={"Manage user roles and permissions across the platform."}>
      </DashboardHeading>

      <Table>
        <Table.ResizableContainer>
          <Table.Content
            aria-label="Manage Users Table"
            className="min-w-[800px]"
          >
            <Table.Header>
              <Table.Column
                isRowHeader
                id="name"
                defaultWidth="1fr"
                minWidth={160}
              >
                Name
                <Table.ColumnResizer />
              </Table.Column>

              <Table.Column
                id="email"
                defaultWidth="1.5fr"
                minWidth={180}
              >
                Email
                <Table.ColumnResizer />
              </Table.Column>

              <Table.Column
                id="role"
                defaultWidth="1fr"
                minWidth={120}
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
              {users.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>{user.name}</Table.Cell>

                  <Table.Cell>{user.email}</Table.Cell>

                  <Table.Cell>
                    <Chip
                      size="sm"
                      variant="soft"
                      color={
                        user.role === "admin"
                          ? "danger"
                          : user.role === "librarian"
                            ? "warning"
                            : "primary"
                      }
                    >
                      {user.role}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    <Chip
                      color="success"
                      size="sm"
                      variant="soft"
                    >
                      Active
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex gap-2">

                      {user.role === "user" && (
                        <Button
                          size="sm"
                          color="secondary"
                          variant="outline"
                          onPress={() =>
                            handleRole(user._id, "librarian")
                          }
                        >
                          Make Librarian
                        </Button>
                      )}

                      {user.role === "librarian" && (
                        <Button
                          size="sm"
                          color="primary"
                          variant="outline"
                          onPress={() =>
                            handleRole(user._id, "admin")
                          }
                        >
                          Make Admin
                        </Button>
                      )}

                      {user.role === "admin" ? (
                        <Button
                          size="sm"
                          variant="flat"
                          isDisabled
                        >
                          Protected
                        </Button>
                      ) : (


                        <AlertDialog>
                          <Button variant="outline" className={"text-red-500"}>Delete</Button>
                          <AlertDialog.Backdrop>
                            <AlertDialog.Container>
                              <AlertDialog.Dialog className="sm:max-w-[400px]">
                                <AlertDialog.CloseTrigger />
                                <AlertDialog.Header>
                                  <AlertDialog.Icon status="danger" />
                                  <AlertDialog.Heading>Delete {user.role} permanently?</AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                  <p>
                                    This will permanently delete <strong>{user.role}</strong> and all of its
                                    data. This action cannot be undone.
                                  </p>
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                  <Button slot="close" variant="tertiary">
                                    Cancel
                                  </Button>
                                  
                                  <Button
                                    size="sm"
                                    color="danger"
                                    
                                   variant="danger"
                                    onPress={() => handleDelete(user._id)}
                                  >
                                    Delete {user.role}
                                  </Button>

                                </AlertDialog.Footer>
                              </AlertDialog.Dialog>
                            </AlertDialog.Container>
                          </AlertDialog.Backdrop>
                        </AlertDialog>
                      )}

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

export default ManageUsers;