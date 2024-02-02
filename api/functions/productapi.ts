import { HttpStatusCode } from "axios"
import axiosInstance from "../axiosInstance/api"
import { endpoint } from "../endpoint/endpoint";



export interface baseApiResponce{
    status:HttpStatusCode;
    data:any
}

export  const fetchProduct= ()=>{
  return axiosInstance.get(endpoint.products.getAllProducts)   
}



export const productDetails= async(id :String | number)=>{
    const res = await axiosInstance.get(`https://fakestoreapi.com/products/${id}`)
    return res.data;
}
