// Import Redux Hooks
import { useSelector } from "react-redux";

function Dashboard() {
  const userName = useSelector((store) => {
    return store.userInfo.accountNow.userName;
  });

  return (
    <div className="dashboard">
      <div className="head">
        <h4 className="title">
          Hello <span>{userName}</span> !
        </h4>
      </div>

      <div className="cover">
        <p>
          From your account dashboard you can view your recent orders, manage
          your shipping and billing addresses, and edit your password and
          account details.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
