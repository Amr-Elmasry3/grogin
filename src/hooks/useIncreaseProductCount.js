// Import Redux Hooks
import { useDispatch } from "react-redux";

// import Cart Slice Reducers
import {
  increaseProductCount,
  calcSubTotal,
  setInStorageCart,
} from "../features/cartSlice";

export function useIncreaseProductCount() {
  const dispatch = useDispatch();

  const increaseCount = (item) => {
    dispatch(increaseProductCount(item.id));
    dispatch(
      calcSubTotal({
        price: item.price - item.price * (item.discount / 100),
        process: "add",
      })
    );
    dispatch(setInStorageCart());
  };

  return increaseCount;
}
