import { Route, Routes } from "react-router-dom";

import AllLists from "../pages/AllLists";
import Signup from "../pages/Signup";
import NewList from "../pages/NewList";
import Login from "../pages/Login";
import Home from "../pages/Home";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/newlist" element={<NewList/>} />
            <Route path="/all-lists" element={<AllLists/>} />
        </Routes>
    )
}

export default AppRoutes