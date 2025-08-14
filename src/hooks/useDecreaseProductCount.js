// Import Redux Hooks
import { useDispatch, useSelector } from "react-redux";

// import Cart Slice Reducers
import {
  decreaseProductCount,
  calcSubTotal,
  setInStorageCart,
} from "../features/cartSlice";

export function useDecreaseProductCount() {
  const cartProducts = useSelector((store) => {
    return store.cart.products;
  });

  const dispatch = useDispatch();

  const decreaseCount = (item) => {
    const myProduct = cartProducts.find((product) => product.id == item.id);

    if (myProduct.count > 1) {
      dispatch(decreaseProductCount(item.id));
      dispatch(
        calcSubTotal({
          price: item.price - item.price * (item.discount / 100),
          process: "subtract",
        })
      );
      dispatch(setInStorageCart());
    }
  };

  return decreaseCount;
}
