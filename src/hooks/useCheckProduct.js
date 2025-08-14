// Import Redux Hooks
import { useSelector } from "react-redux";

export function useCheckProduct() {
  const cartProducts = useSelector((store) => {
    return store.cart.products;
  });

  const wishlistProducts = useSelector((store) => {
    return store.wishlist.products;
  });

  const compareProducts = useSelector((store) => {
    return store.compare.products;
  });

  const checkProduct = (id, type) => {
    let products = "";

    if (type === "wishlist") {
      products = wishlistProducts;
    } else if (type === "compare") {
      products = compareProducts;
    } else if (type === "cart") {
      products = cartProducts;
    }

    let isFound = products.some((product) => product.id === id);

    return isFound;
  };

  return checkProduct;
}
