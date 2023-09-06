
import './App.css';
import{Route, Routes} from "react-router-dom";
import CreateNewAccount from "./Components/CreateNewAccount";
import ForgotPassword from "./Components/ForgotPassword";
import UIform from './Components/UIform';



function App() {
  return(

    <Routes>
      <Route path="/" element={<CreateNewAccount/>}></Route>
      <Route path="/forgot" element={<ForgotPassword/>}></Route>
      <Route path="/uiform" element={<UIform/>}></Route>
    </Routes>
    

    
  );
  }

export default App;
