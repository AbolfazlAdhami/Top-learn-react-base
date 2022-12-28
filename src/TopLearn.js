import * as React from "react";
import { Routes, Route, useParams } from "react-router-dom";

import MainLayout from "./Component/MainLayout";

import Resgester from "./Component/User/Resgester";
import Courses from "./Component/Courses/Courses";
import Login from "./Component/User/Login";
function TopLearn() {
        const { id } = useParams();

        return (
                <MainLayout
                        id={id}
                        props={
                                <Routes>
                                        <Route path="regester" element={<Resgester />} />
                                        <Route path="login" element={<Login />} />
                                        <Route path="home" element={<Courses />} />
                                        <Route path="/" element={<Courses />} />
                                </Routes>
                        }
                ></MainLayout>
        );
}
export default TopLearn;
