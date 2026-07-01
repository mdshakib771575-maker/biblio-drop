"use server"
import { headers } from "next/headers";
import { auth } from "../auth";
import { baseUrl } from "./baseUrl";
export const serverMutation = async (path, method, data) => {

   const {token} = await auth.api.getToken({
      headers: await headers()
    })
    // console.log("token",token)


  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  return res.json();
};

// update
export const updateStatus = async (id, status) => {
  try {
    const res = await fetch(`/api/deliveries/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    if (res.ok) {
      fetchDeliveries(); // data reload
    }
  } catch (error) {
    // console.log(error);
  }
};
// get
export const serverFetch = async (path)=>{
    const res = await fetch(`${baseUrl}${path}`)
    return res.json();
}

export const UpdateReview = async (id, reviewData) => {
  const res = await fetch(`${baseUrl}/api/reviews/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }
  );

  return res.json();
};