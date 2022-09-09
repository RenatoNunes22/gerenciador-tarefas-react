import { useState, useEffect } from "react";
import "./Tasks.scss";
import axios from "axios";
const Tasks = () => {
   const [tasks, setTasks] = useState([
      {
         id: "1",
         description: "Estudar Programação",
         isCompleted: false,
      },
      {
         id: "2",
         description: "Ler",
         isCompleted: true,
      },
   ]);

   const fetchTasks = async () => {
      try {
         const { data } = await axios.get(
            "https://fsc-task-manager-backend.herokuapp.com/tasks"
         );
         setTasks(data);
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      fetchTasks();
   }, []);
   return (
      <div className="tasks-container">
         <h2>My tasks</h2>
         <div className="last-tasks">
            <h3>Last Tasks</h3>
            <div className="tasks-list">
               {tasks
                  .filter((task) => task.isCompleted === false)
                  .map((lastTasks) => (
                     <p>{lastTasks.description}</p>
                  ))}
            </div>
         </div>
         <div className="completed-tasks">
            <h3>Completed tasks</h3>
            <div className="tasks-list">
               {tasks
                  .filter((task) => task.isCompleted)
                  .map((completedTask) => (
                     <p>{completedTask.description}</p>
                  ))}
            </div>
         </div>
      </div>
   );
};

export default Tasks;
