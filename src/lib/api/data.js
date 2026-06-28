import { serverFetch } from "./server";

export const GetUsers = async () => {
  return await serverFetch("/api/users");
};






