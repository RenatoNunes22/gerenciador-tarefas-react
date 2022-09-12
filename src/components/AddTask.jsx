import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./AddTask.scss";
import CustomButtom from "./CustomButtom";
import CustomInput from "./CustomInput";
const AddTask = () => {
   const [task, setTask] = useState("");
   const onChange = (e) => {
      setTask(e.targt.value);
   };
   return (
      <div className="add-task-container">
         <CustomInput label="Add task..." value={task} onChange={onChange} />
         <CustomButtom>
            <FaPlus size={14} color="#ffffff"></FaPlus>
         </CustomButtom>
      </div>
   );
};
export default AddTask;
