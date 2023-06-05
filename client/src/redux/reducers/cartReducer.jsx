import * as actionType from '../constants/cartConstant'


export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        case actionType.ADD_TO_CART:
            const item=action.payload;//checking if action already exists
            const exist=state.cartItems.find(product=>product.id===item.id);
            //state contains what already we have in redux
            //action has what we have to store inside redux
            if(exist)
            {
                return {...state,cartItems:state.cartItems.map(
                    data=>data.product===exist.product?item:data)}
                    //using map to check, if exists replace with new item else show prev item 
            }
            else{
                return {...state,cartItems:[...state.cartItems,item]}
                //if not exists then add in cartItems array
            }
            case actionType.REMOVE_FROM_CART:
                return {...state,cartItems:state.cartItems.filter(product=>product.id!==action.payload)}
                //if id dosen't matches keep else discard
                //looping through filter on array
            default:
                return state;

    }
}