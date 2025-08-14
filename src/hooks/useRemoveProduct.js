// Import Redux Hooks
import { useDispatch, useSelector } from "react-redux";

// Import Cart Slice Reducers
import {
  removeProductFromCart,
  setCount,
  calcSubTotal,
  setInStorageCart,
} from "../features/cartSlice";

// Import Wishlist Slice Reducers
import {
  removeProductFromWishlist,
  setInStorageWishlist,
} from "../features/wishlistSlice";

// Import Compare Slice Reducers
import {
  removeProductFromCompare,
  setInStorageCompare,
} from "../features/compareSlice";

// Import Toastify Slice Reducers
import { setMessage, setType, notify } from "../features/toastifySlice";

export function useRemoveProduct() {
  const cartProducts = useSelector((store) => {
    return store.cart.products;
  });

  const dispatch = useDispatch();

  const removeProduct = (product, type) => {
    let message = "";

    if (type === "wishlist") {
      message = "Product removed from wishlist";

      dispatch(removeProductFromWishlist(product.id));
      dispatch(setInStorageWishlist());
    } else if (type === "compare") {
      message = "Product removed from comparsion";

      dispatch(removeProductFromCompare(product.id));
      dispatch(setInStorageCompare());
    } else if (type === "cart") {
      message = "Product removed from cart";

      const myProduct = cartProducts.find((item) => item.id === product.id);

      console.log(myProduct);

      dispatch(
        calcSubTotal({
          price:
            myProduct.count *
            (product.price - product.price * (product.discount / 100)),
          process: "subtract",
        })
      );
      dispatch(removeProductFromCart(product.id));
      dispatch(setCount("subtract"));
      dispatch(setInStorageCart());
    }

    // Handle Toastify
    dispatch(setMessage(message));
    dispatch(setType("success"));
    dispatch(notify());
  };

  return removeProduct;
}
