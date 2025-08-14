// Import Ui
import SidebarUi from "./SidebarUi";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Sidebar Slice Reducers
import { handleSidebar } from "../../../features/sidebarSlice";

function Sidebar() {
  const isOpen = useSelector((store) => {
    return store.sidebar.isOpen;
  });

  const isLogin = useSelector((store) => {
    return store.userInfo.isLogin;
  });

  const dispatch = useDispatch();

  const handleClickCloseIcon = () => {
    dispatch(handleSidebar());
  };

  return (
    <>
      <SidebarUi
        isOpen={isOpen}
        handleClickCloseIcon={handleClickCloseIcon}
        isLogin={isLogin}
      />
    </>
  );
}

export default Sidebar;
