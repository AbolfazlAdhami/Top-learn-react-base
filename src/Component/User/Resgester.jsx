import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Resgester() {
        const name = useRef(null);

        return (
                <>
                        <div className="container">
                                <nav aria-label="breadcrumb">
                                        <ul className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                        <Link to="/">تاپ لرن</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                        عضویت در سایت
                                                </li>
                                        </ul>
                                </nav>
                        </div>

                        <main className="client-page">
                                <div className="container-content">
                                        <header>
                                                <h2>عضویت در سایت</h2>
                                        </header>

                                        <div className="form-layer">
                                                <form action="" method="">
                                                        <div className="input-group">
                                                                <span className="input-group-addon" id="username">
                                                                        <i className="bx bxs-user"></i>
                                                                </span>
                                                                <input type="text" ref={name} className="form-control" placeholder="نام و نام خانوادگی" aria-describedby="username" />
                                                        </div>

                                                        <div className="input-group">
                                                                <span className="input-group-addon" id="email-address">
                                                                        <i className="bx bxs-envelope"></i>
                                                                </span>
                                                                <input type="text" className="form-control" placeholder="ایمیل" aria-describedby="email-address" />
                                                        </div>

                                                        <div className="input-group">
                                                                <span className="input-group-addon" id="password">
                                                                        <i className="bx bxs-lock-alt"></i>
                                                                </span>
                                                                <input type="text" className="form-control" placeholder="رمز عبور " aria-describedby="password" />
                                                        </div>

                                                        <div className="accept-rules">
                                                                <label>
                                                                        <input type="checkbox" name="" /> قوانین و مقررات سایت را میپذیرم{" "}
                                                                </label>
                                                        </div>

                                                        <div className="link">
                                                                <a href="">
                                                                        {" "}
                                                                        <i className="bx bxs-detail"></i> قوانین و مقررات سایت !
                                                                </a>
                                                                <Link to="/Login">
                                                                        {" "}
                                                                        <i className="bx bxs-user-account"></i> ورود به سایت{" "}
                                                                </Link>
                                                        </div>

                                                        <button className="btn btn-success">عضویت در سایت</button>
                                                </form>
                                        </div>
                                </div>
                        </main>
                </>
        );
}

export default Resgester;
