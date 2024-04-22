import "../assets/scss/components/Container.scss";

export const Container = ({ containerClass, children }) => {
  return (
    <div className={`container ${containerClass}`}>
      {children}
    </div>
  );
};
