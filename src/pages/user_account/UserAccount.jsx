// Import Style File
import "./user_account.scss";

// Import Components
import UserAccountSidebar from "../../components/ui/user_account_components/UserAccountSidebar";
import Dashboard from "../../components/ui/user_account_components/Dashboard";
import Orders from "../../components/ui/user_account_components/Orders";
import Addresses from "../../components/ui/user_account_components/Addresses";
import AccountDetails from "../../components/ui/user_account_components/AccountDetails";

// Import Hooks
import { useState } from "react";
import { useNavigate } from "react-router";

// Import Redux Hooks
import { useDispatch } from "react-redux";

// Import User Info Slice
import { handleLogout } from "../../features/userInfoSlice";

function UserAccount() {
  const [categories, setCategories] = useState({
    data: [
      { id: 1, title: "Dashboard", active: true },
      { id: 2, title: "Orders", active: false },
      { id: 3, title: "Addresses", active: false },
      { id: 4, title: "Account Details", active: false },
      { id: 5, title: "Logout", active: false },
    ],
    categoryNow: "Dashboard",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategory = (id) => {
    const newCategories = [...categories.data];

    if (newCategories[id - 1].title === "Logout") {
      dispatch(handleLogout());
      navigate("/login-register");
    }

    newCategories.map((item) => {
      return item.id === id ? (item.active = true) : (item.active = false);
    });

    setCategories({
      data: newCategories,
      categoryNow: newCategories[id - 1].title,
    });
  };

  return (
    <div className="user-account">
      <div className="container">
        <UserAccountSidebar
          categories={categories}
          handleCategory={handleCategory}
        />

        <div className="user-account-content">
          {categories.categoryNow === "Dashboard" ? (
            <Dashboard />
          ) : categories.categoryNow === "Orders" ? (
            <Orders />
          ) : categories.categoryNow === "Addresses" ? (
            <Addresses />
          ) : categories.categoryNow === "Account Details" ? (
            <AccountDetails />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
