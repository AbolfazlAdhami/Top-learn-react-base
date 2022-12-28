import * as React from "react";
import { NavLink } from "react-router-dom";

function TopNav() {
        return (
                <nav>
                        <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                        <ul>
                                                <li>
                                                        <NavLink
                                                                to="/"
                                                                style={({ isActive }) => {
                                                                        return { color: isActive ? "#3498db" : "#ecf0f1" };
                                                                }}
                                                        >
                                                                {" "}
                                                                صفحه اصلی
                                                        </NavLink>
                                                        <NavLink> درباره ما </NavLink>
                                                        <NavLink> تماس با ما </NavLink>
                                                </li>
                                        </ul>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                        <div className="clientarea">
                                                {/* <div className="loggein">
                                                        <i className="zmdi zmdi-account"></i>
                                                        <a href=""> امیر جان،خوش اومدی </a>
                                                </div> */}
                                                <div className="signin ">
                                                        <i className="zmdi zmdi-account"></i>
                                                        <NavLink
                                                                to="/login"
                                                                style={({ isActive }) => {
                                                                        return { color: isActive ? "#3498db" : "#ecf0f1" };
                                                                }}
                                                        >
                                                                {" "}
                                                                ورود{" "}
                                                        </NavLink>
                                                        /
                                                        <NavLink
                                                                to="/regester"
                                                                style={({ isActive }) => {
                                                                        return { color: isActive ? "#3498db" : "#ecf0f1" };
                                                                }}
                                                        >
                                                                {" "}
                                                                عضویت{" "}
                                                        </NavLink>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </nav>
        );
}

export default TopNav;
