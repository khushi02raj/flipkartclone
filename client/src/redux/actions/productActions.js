import axios from 'axios';
import * as actionTypes from '../constants/productConstant';//just for storing constants in one place
const URL='http://localhost:8000';
export const getProducts=()=>//this function has to be called in home component to display all products
   async(dispatch)=> { //middleware
   try{
    const {data}=await axios.get(`${URL}/products`);
    dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS, payload:data})//calls reducer
}
  catch(error){
    dispatch({type:actionTypes.GET_PRODUCTS_FAIL, payload:error.message})
  }
}
export const getProductDetails=(id)=>async(dispatch)=>{
  try{
    dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST});
    const {data}=await axios.get(`${URL}/product/${id}`);
    dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data})

  }
  catch(error)
  {
    dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL, payload:error.message})

  }
}
