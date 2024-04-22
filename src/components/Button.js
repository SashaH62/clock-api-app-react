import "../assets/scss/components/Button.scss";

export const Button = ({ clickHandler, btnClass, children }) => {
  return (
    <button
      className={`btn ${btnClass ? btnClass : ""}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};
