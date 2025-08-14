// Import Style File
import "./my_input.scss";

function MyInput({ type, value, name, placholder, handleChange }) {
  return (
    <input
      className="my-input"
      type={type}
      value={value}
      name={name}
      placeholder={placholder}
      onChange={(eve) => {
        handleChange(eve.target.value);
      }}
    />
  );
}

export default MyInput;
