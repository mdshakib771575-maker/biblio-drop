import { serverFetch } from "./server";
// admin manageUser 
export const GetUsers = async () => {
  return await serverFetch("/api/users");
};

// admin manageAllbooks
export const GetAllAdminBooks = async () => {
  return await serverFetch("/api/admin/books");
};





