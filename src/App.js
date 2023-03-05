import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LogIn from "./components/Login/LogIn";
import GamePage from "./pages/GamePage";
import StatisticPage from "./pages/StatisticPage";
import UserContext from "./components/UserContext";
import PrivateRoutes from "./utils/PrivateRoutes";


function App() {
  const [userName, setUserName] = useState("")
  return (
    <UserContext.Provider value={{userName, setUserName}}>
      <Router>
        <Header/>
        <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route element={<GamePage/>} path='/game' exact/>
          <Route element={<StatisticPage/>} path='/statistics'/>
          </Route>
          <Route path="/login" element={<LogIn/>}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;