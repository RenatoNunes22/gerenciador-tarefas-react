import "./CustomButtom.scss";

const CustomButtom = ({ onClick, children }) => {
   return (
      <div className="custom-button-container" onClick={onClick}>
         {children}
      </div>
   );
};
export default CustomButtom;
