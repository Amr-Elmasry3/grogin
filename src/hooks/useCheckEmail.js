// Import Redux Hooks
import { useSelector } from "react-redux";

export function useCheckEmail() {
  const accounts = useSelector((store) => {
    return store.userInfo.accounts;
  });

  const checkEmail = (email) => {
    const isFound = accounts.some((acc) => acc.email === email);
    console.log(isFound);

    return isFound;
  };

  return checkEmail;
}
