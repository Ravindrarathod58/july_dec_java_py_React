const initialState = {
  cart: [],
};

function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const isPresent = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      //   console.log(isPresent);
      if (isPresent) {
        isPresent.quantity = isPresent.quantity ? isPresent.quantity + 1 : 1;
        const arr = { cart: [...state.cart] };
        state = arr;
      } else {
        action.payload.quantity = 1;
        const arr = { cart: [...state.cart, action.payload] };
        state = arr;
        console.log(state.cart);
      }
      console.log(state.cart);
      return state;

    case "REMOVE_FROM_CART":
      const arr = state.cart.filter((product) => product.id != action.payload);
      const newArr = { cart: arr };
      state = newArr;
      return state;
  }
}

export { initialState, CartReducer };
