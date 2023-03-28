import { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM } from '../actions/cart.action';

const INITIAL_STATE = {
    items: [],
    total: 0
};

const sumTotal = (list) => {
    console.log("TRES");
    list.map(item => item.quantity*item.price).reduce((a,b) => a+b,0)}; //ERROR ACA?

const CartReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case ADD_ITEM:
            console.log("UNO")
            let updatedCart = [];
            console.log(action.item)

            if (state.items.find(item=>item.id === action.item.id)) {
                updatedCart = state.items.map(item=>{
                    if (item.id === action.item.id) {
                        return {
                            ...item,
                            quantity: item.quantity +1
                        }};
                    return item;
                });
            } else {
                console.log("DOS");
                const item = { ...action.item, quantity: 1 };
                updatedCart = { ...state.items, item};
            }

            return {
                ...state,
                items: updatedCart,
                total: sumTotal(updatedCart)
            };
        
        case REMOVE_ITEM:
            const filteredCart = state.items.filter(item => item.id !== action.itemID);
            return {
                ...state,
                items: filteredCart,
                total: sumTotal(filteredCart),
            };
        case CONFIRM_CART:

            return state;

        default:

            return state;
    }

};

export default CartReducer