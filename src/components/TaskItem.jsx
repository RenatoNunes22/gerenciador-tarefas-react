import "./TaskItem.scss";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { useAlert } from "react-alert";
const TaskItem = ({ task, fetchTasks }) => {
   const alert = useAlert();
   const handleTaskDeletion = async () => {
      try {
         await axios.delete(
            `https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id}`
         );
         await fetchTasks();
         alert.success("The task was successfully required");
      } catch (error) {
         alert.error("Something went wrong");
      }
   };
   const handleTaskCompletionChange = async (e) => {
      try {
         await axios.patch(
            `https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id}`,
            {
               isCompleted: e.target.checked,
            }
         );
         await fetchTasks();
         alert.success("The task was successfully modified");
      } catch (error) {
         alert.error("Something went wrong");
      }
   };
   return (
      <div className="task-item-container">
         <div className="task-description">
            <label
               className={
                  task.isCompleted
                     ? "checkbox-container-completed"
                     : "checkbox-container"
               }
            >
               {task.description}
               <input
                  type="checkbox"
                  defaultChecked={task.isCompleted}
                  onChange={(e) => handleTaskCompletionChange(e)}
               />
               <span
                  className={
                     task.isCompleted ? "checkmark completed" : "checkmark"
                  }
               ></span>
            </label>
         </div>
         <div className="delete">
            <AiFillDelete
               size={18}
               color="#a97474"
               onClick={handleTaskDeletion}
            />
         </div>
      </div>
   );
};

export default TaskItem;
