// Import Redux hooks
import { useSelector, useDispatch } from "react-redux";

// Import Login Model Slice Reducers
import { handleModel } from "../features/loginModelSlice";

export function useCheckLogin() {
  const isLogin = useSelector((store) => {
    return store.userInfo.isLogin;
  });

  const dispatch = useDispatch();

  const checkLogin = () => {
    if (!isLogin) {
      dispatch(handleModel());
    }
  };

  return { isLogin, checkLogin };
}
