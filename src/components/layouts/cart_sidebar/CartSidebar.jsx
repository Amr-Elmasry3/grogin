// Import Ui
import CartSidebarUi from "./CartSidebarUi";

// Import Custom Hooks
import { useRemoveProduct } from "../../../hooks/useRemoveProduct";
import { useCheckLogin } from "../../../hooks/useCheckLogin";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Cart Sidebar Slice Function
import { handleCartToggle } from "../../../features/cartSidebarSlice";

function CartSidebar() {
  const removeProduct = useRemoveProduct();
  const { isLogin, checkLogin } = useCheckLogin();

  const cart = useSelector((store) => {
    return store.cart;
  });
  const isOpen = useSelector((choose) => {
    return choose.cartSidebar.isOpen;
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleCartToggle());
  };

  return (
    <>
      <CartSidebarUi
        cart={cart}
        removeProduct={removeProduct}
        isOpen={isOpen}
        handleClick={handleClick}
        isLogin={isLogin}
        checkLogin={checkLogin}
      />
    </>
  );
}

export default CartSidebar;
