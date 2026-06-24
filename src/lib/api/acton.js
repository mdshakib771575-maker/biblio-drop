"use server"

import { serverMutation } from "./server";


export const AddBook = async (data)=>{
    console.log("data",data)
    const resData = await serverMutation("/api/books","POST",data);
    
    return resData; 
}

export const updateOrganizetion = async (data,id)=>{
    const resData = await serverMutation(`/api/organizations/${id}`,"PATCH",data);
    
    return resData; 
}