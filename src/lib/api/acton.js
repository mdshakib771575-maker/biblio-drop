"use server"

import { serverMutation } from "./server";


export const AddBook = async (data)=>{
    console.log("data",data)
    const resData = await serverMutation("/api/books","POST",data);
    
    return resData; 
}

export const UpdateLibrarianBook = async (id, data) => {
  return await serverMutation(`/api/books/${id}`,
    "PATCH",
    data
  );
};
// export const DeleteLibrariaBook = async (data,id)=>{
//     const resData = await serverMutation(`/api/books/${id}`,"DELETE",data);
    
//     return resData; 
// }

export const DeleteLibrarianBook = async (id) => {
  const resData = await serverMutation(`/api/books/${id}`,
    "DELETE"
  );

  return resData;
};
// user
export const RequestBook = async (data) => {
  return await serverMutation("/api/deliveries","POST",data);
};



export const AddReview = async (data) => {
  return await serverMutation("/api/reviews","POST",data);
};

// user review delete
export const DeleteReview = async (id) => {
  return await serverMutation(`/api/reviews/${id}`,
    "DELETE"
  );
};