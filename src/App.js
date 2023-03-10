import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import LogIn from "./components/Login/LogIn";
import GamePage from "./pages/GamePage";
import StatisticPage from "./pages/StatisticPage";
import UserContext from "./components/UserContext";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
  const [userName, setUserName] = useState("")
  return (
    <UserContext.Provider value={{userName, setUserName}}>
      <Router>
        <Header/>
        <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route element={<GamePage/>} path='/game' exact/>
          </Route>         
           <Route element={<StatisticPage/>} path='/statistics'/>
          <Route path="/login" element={<LogIn/>}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;