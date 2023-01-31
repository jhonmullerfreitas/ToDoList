import { Route, Routes } from "react-router-dom";

import AllLists from "../pages/AllLists";
import Signup from "../pages/Signup";
import NewList from "../pages/NewList";
import Login from "../pages/Login";
import Home from "../pages/Home";
import EditList from "../pages/EditList"

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/new-list" element={<NewList/>} />
            <Route path="/edit-list" element={<EditList/>} />
            <Route path="/all-lists" element={<AllLists/>} />
        </Routes>
    )
}

export default AppRoutes