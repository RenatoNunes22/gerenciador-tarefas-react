import Tasks from "./components/Tasks";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
   // you can also just use 'bottom center'
   position: positions.BOTTOM_CENTER,
   timeout: 3000,
   offset: "30px",
   // you can also just use 'scale'
   transition: transitions.SCALE,
};
export const App = () => {
   return (
      <>
         <AlertProvider template={AlertTemplate} {...options}>
            <Tasks />
         </AlertProvider>
      </>
   );
};
