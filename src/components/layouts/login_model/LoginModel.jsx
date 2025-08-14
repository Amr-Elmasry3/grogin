// Import Style File
import "./login_model.scss";

// Import Components
import Button from "../../common/button/Button";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Model Slice Reducers
import { handleModel } from "../../../features/loginModelSlice";

// Import Link
import { Link } from "react-router-dom";

export default function MyModel() {
  const isOpen = useSelector((store) => {
    return store.loginModel.isOpen;
  });

  const message = useSelector((store) => {
    return store.loginModel.message;
  });

  const dispatch = useDispatch();

  const handleModelState = () => {
    dispatch(handleModel());
  };

  return (
    <div className={`login-model ${isOpen ? "open" : ""}`}>
      <div className="model-box">
        <h3 className="message">{message}</h3>

        <div className="btns-box">
          <Link to="/login-register">
            <Button
              btnTitle="Login"
              func={() => {
                handleModelState();
              }}
            />
          </Link>

          <Button btnTitle="Cancel" func={handleModelState} />
        </div>
      </div>
    </div>
  );
}
