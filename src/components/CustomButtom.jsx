import "./CustomButtom.scss";

const CustomButtom = ({ onClick, children }) => {
   <div className="custom-button-container" onClick={onClick}>
      {children}
   </div>;
};
export default CustomButtom;
