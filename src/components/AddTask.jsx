import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./AddTask.scss";
import CustomButtom from "./CustomButtom";
import CustomInput from "./CustomInput";
import { useAlert } from "react-alert";
import axios from "axios";
import Tasks from "./Tasks";
const AddTask = ({ fetchTasks }) => {
   const [task, setTask] = useState("");
   const alert = useAlert();
   const onChange = (e) => {
      setTask(e.target.value);
   };

   const handleTaskAddition = async () => {
      try {
         if (task.length === 0) {
            return alert.error("A tarefa precisa de uma descrição");
         }
         await axios.post(
            "https://fsc-task-manager-backend.herokuapp.com/tasks",
            {
               description: task,
               isCompleted: false,
            }
         );
         await fetchTasks();
         setTask("");
      } catch (error) {
         alert.error("Algo deu errado");
      }
   };
   return (
      <div className="add-task-container">
         <CustomInput
            label="Add task..."
            value={task}
            onChange={onChange}
            onEnterPress={handleTaskAddition}
         />
         <CustomButtom onClick={handleTaskAddition}>
            <FaPlus size={14} color="#ffffff"></FaPlus>
         </CustomButtom>
      </div>
   );
};
export default AddTask;
