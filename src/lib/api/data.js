import { serverFetch } from "./server";
// admin manageUser 
export const GetUsers = async () => {
  return await serverFetch("/api/users");
};

// admin manageAllbooks
export const GetAllAdminBooks = async () => {
  return await serverFetch("/api/admin/books");
};

// admin overview card tatal user route 
export const GetTotalUsers = async () => {
  return await serverFetch("/api/admin/total-users");
};

// admin overview total delevery card
export const GetTotalDeliveries = async () => {
  return await serverFetch("/api/admin/total-deliveries");
};





