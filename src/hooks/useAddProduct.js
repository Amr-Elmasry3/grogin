// Import Redux Hooks
import { useDispatch } from "react-redux";

// Import Cart Slice Reducers
import {
  addProductToCart,
  setCount,
  calcSubTotal,
  setInStorageCart,
} from "../features/cartSlice";

// Import Wishlist Slice Reducers
import {
  addProductToWishlist,
  setInStorageWishlist,
} from "../features/wishlistSlice";

// Import Compare Slice Reducers
import {
  addProductToCompare,
  setInStorageCompare,
} from "../features/compareSlice";

// Import Toastify Slice Reducers
import { setMessage, setType, notify } from "../features/toastifySlice";

// Funtion Job => Add Product to Cart , Wishlist and Compare
export function useAddProduct() {
  const dispatch = useDispatch();

  const addProduct = (product, type) => {
    let message = "";

    if (type === "wishlist") {
      message = "Product added to wishlist";

      dispatch(addProductToWishlist(product));
      dispatch(setInStorageWishlist());
    } else if (type === "compare") {
      message = "Product added to comparsion";

      dispatch(addProductToCompare(product));
      dispatch(setInStorageCompare());
    } else if (type === "cart") {
      message = "Product added to cart";

      dispatch(addProductToCart(product));
      dispatch(setCount("add"));
      dispatch(
        calcSubTotal({
          price: product.price - product.price * (product.discount / 100),
          process: "add",
        })
      );
      dispatch(setInStorageCart());
    }

    // Handle Toastify
    dispatch(setMessage(message));
    dispatch(setType("success"));
    dispatch(notify());
  };

  return addProduct;
}
