"use server"

import { serverMutation } from "./server";
// librarian add book route
export const AddBook = async (data)=>{
    const resData = await serverMutation("/api/librarian/books","POST",data);
    
    return resData; 
}
// librarian Update btn route
export const UpdateLibrarianBook = async (id, data) => {
  return await serverMutation(`/api/librarian/books/${id}`,
    "PATCH",
    data
  );
};

// Librarian Delete book btn route
export const DeleteLibrarianBook = async (id) => {
  const resData = await serverMutation(`/api/librarian/books/${id}`,
    "DELETE"
  );
  return resData;
};

//  
export const RequestBook = async (data) => {
  return await serverMutation("/api/deliveries","POST",data);
};


// User AddReview route
export const AddReview = async (data) => {
  return await serverMutation("/api/reviews","POST",data);
};

// user review delete btn route
export const DeleteReview = async (id) => {
  return await serverMutation(`/api/reviews/${id}`,
    "DELETE"
  );
};

// admin manageUser  Update role btn route
export const UpdateUserRole = async (id, role) => {
  return await serverMutation(`/api/users/${id}`,
    "PATCH",
    { role }
  );
};

// admin manageUser  Delete role btn route
export const DeleteUser = async (id) => {
  return await serverMutation(
    `/api/users/${id}`,
    "DELETE"
  );
};

// admin manage all books status update btn route
export const UpdateBookStatus = async (id, isPublished) => {
  return await serverMutation(`/api/admin/books/status/${id}`,
    "PATCH",
    { isPublished }
  );
};

// admin manage all books delete btn route
export const DeleteBook = async (id) => {
  return await serverMutation(`/api/admin/books/${id}`,
    "DELETE"
  );
};