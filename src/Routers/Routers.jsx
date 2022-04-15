import React from "react";
import { Routes, Route } from "react-router-dom";
import { RegistrationOne } from "../Pages/RegistrationOne";
import { RegistrationTwo } from "../Pages/RegistrationTwo"
import { Users } from "../Pages/Users";
import { Home } from "../Home/Home"
const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/registration/one" element={<RegistrationOne />} />
                <Route path="/registration/two" element={<RegistrationTwo />} />
            </Routes>
        </>
    )
}
export default Routers;


