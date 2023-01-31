import { Route, Routes } from "react-router-dom";

import AllLists from "../pages/AllLists";
import Signup from "../pages/Signup";
import NewList from "../pages/NewList";
import Login from "../pages/Login";
import Home from "../pages/Home";
import EditList from "../pages/EditList"
import Profile from "../pages/Profile";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/dashboard" element={<Home/>} />
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/new-list" element={<NewList/>} />
            <Route path="/edit-list" element={<EditList/>} />
            <Route path="/all-lists" element={<AllLists/>} />
            <Route path="profile" element={<Profile/>} />
        </Routes>
    )
}

export default AppRoutes