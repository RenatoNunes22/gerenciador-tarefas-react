import "./CustomInput.scss";
const CustomInput = ({ label, value, onChange, onEnterPress }) => {
   const handleKeyDonw = (e) => {
      if (e.key === "Enter") {
         onEnterPress();
      }
   };
   return (
      <div className="custom-input-container">
         <input
            type="text"
            className="custom-input"
            value={value}
            onChange={(e) => onChange(e)}
            onKeyDown={(e) => handleKeyDonw(e)}
         />
         {label ? (
            <label
               className={`${
                  value.length > 0 ? "shrink" : null
               }  custom-input-label`}
            >
               {label}
            </label>
         ) : null}
      </div>
   );
};
export default CustomInput;
