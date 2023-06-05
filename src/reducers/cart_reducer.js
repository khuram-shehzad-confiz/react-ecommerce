import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_ADDRESS,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  console.log(action.type);
  if (action.type === ADD_TO_CART) {
    const { id, amount, product } = action.payload;

    const tempItem = state.cart.find((i) => i.id === id);
    console.log("tempItem" + tempItem);
    if (tempItem) {
      return { ...state };
    } else {
      const newItem = {
        id,
        name: product.name,
        amount,
        price: product.price,
        max: product.stock,
        image: product.images[0],
        // image: product.images[0].url,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    let removeId = action.payload.id;

    console.log("Item going to remove with ID: " + removeId);

    const newItems = state.cart.filter((item) => item.id !== removeId);

    return { ...state, cart: newItems };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    // console.log(id+value)
    const tempCart = state.cart.map((item) => {
      // console.log('item in map')
      // console.log(item)
      if (item.id === id) {
        if (value === "inc" && item.amount + 1 < item.max) {
          return { ...item, amount: item.amount + 1 };
        }
        if (value === "dec" && item.amount > 1) {
          return { ...item, amount: item.amount - 1 };
        }

        // return item
      }
      // else {
      //   return item;
      // }
      return item;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const { total_item, total_amount } = state.cart.reduce(
      (total, cartItems) => {
        const{amount, price}=cartItems
        total.total_item += amount;
        total.total_amount += price * amount;

        return total;
      },
      { total_item: 0, total_amount: 0 }
    );

    return { ...state, total_amount, total_item };
  }

  if(action.type===SAVE_SHIPPING_ADDRESS){
console.log(SAVE_SHIPPING_ADDRESS+' in cart reducer')
    return{...state, shipping_address:action.payload}
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
