import { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import axios from "axios";

export const App = () => {
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
      <>
         {tasks.map((task, index) => (
            <TaskItem key={index} task={task} />
         ))}
      </>
   );
};
