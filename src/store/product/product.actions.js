// Product actions here
import axios from "axios";
import {
    GET_PRODUCTS_LOADING,
     GET_PRODUCTS_SUCCESS, 
     GET_PRODUCTS_ERROR  
} from "./product.types"
export const getproductsApi=()=>(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
    axios.get(" http://localhost:8080/products").then((r)=>{
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:r.data})
    })
    .catch(()=>{
        dispatch({type:GET_PRODUCTS_ERROR})
    });

}