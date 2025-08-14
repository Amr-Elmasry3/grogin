// Import Ui
import LogoSectionUi from "./LogoSectionUi";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Sidebar Slice Reducers
import { handleSidebar } from "../../../../features/sidebarSlice";

// Import Cart Sidebar Slice Function
import { handleCartToggle } from "../../../../features/cartSidebarSlice";

function LogoSection() {
  const cart = useSelector((store) => {
    return store.cart;
  });

  const wishlist = useSelector((store) => {
    return store.wishlist;
  });

  const isLogin = useSelector((store) => {
    return store.userInfo.isLogin;
  });

  const dispatch = useDispatch();

  const handleClickMenu = () => {
    dispatch(handleSidebar());
  };

  const handleClickCart = () => {
    dispatch(handleCartToggle());
  };

  return (
    <>
      <LogoSectionUi
        handleClickMenu={handleClickMenu}
        countCart={cart.count}
        countWishlist={
          [...wishlist.products].length ? [...wishlist.products].length : 0
        }
        handleClickCart={handleClickCart}
        isLogin={isLogin}
      />
    </>
  );
}

export default LogoSection;
