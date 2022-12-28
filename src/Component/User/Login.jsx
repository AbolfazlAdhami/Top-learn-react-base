import React, { useState, useEffect, useRef } from "react";
import * as yup from "yup";
// import { object, string, min } from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
        const [inputEmail, setInputEmail] = useState("");
        const [inputPassword, setInputPassword] = useState("");
        const [remeber, setRemeber] = useState(false);
        const [error, setError] = useState([]);
        let [person] = useState({
                email: "",
                password: "",
                remeberMe: false,
        });
        const EmailValue = useRef("");
        const PasswordValue = useRef("");
        const RemeberMe = useRef(false);

        useEffect(() => {
                EmailValue.current = inputEmail;
                person.email = inputEmail;
        }, [inputEmail]);
        useEffect(() => {
                PasswordValue.current = inputPassword;
                person.password = inputPassword;
        }, [inputPassword]);
        useEffect(() => {
                RemeberMe.current = remeber;
                person.remeberMe = remeber;
        }, [remeber]);

        let schema = yup.object({
                email: yup.string().email("فرمت ایمیل صحیح نمی باشد").required("پر کردن فیلد ایمیل اجباری است!!"),
                password: yup.string().min(4, "حداقل پسوورد باید 4 کاراکتر باشد"),
        });
        // let userSchema = object({
        //         email: string().email(),
        //         password: min(4),
        // });

        const validion = async () => {
                await (async () => {
                        try {
                                return await schema.validate(person, { abortEarly: false });
                        } catch {
                                console.log(Error);
                                setError([...Error]);
                        }
                })();
        };

        const handelSubmit = async (e) => {
                e.preventDefault();

                const result = await validion();
                console.log(result, "123", error);
        };

        return (
                <>
                        <div className="container">
                                <nav aria-label="breadcrumb">
                                        <ul className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                        <a href="#">تاپ لرن</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                        ورود به سایت
                                                </li>
                                        </ul>
                                </nav>
                        </div>

                        <main className="client-page">
                                <div className="container-content">
                                        <header>
                                                <h2>ورود به سایت</h2>
                                        </header>

                                        <div className="form-layer">
                                                <form onSubmit={(e) => e.preventDefault()}>
                                                        <div className="input-group">
                                                                <span className="input-group-addon" id="email-address">
                                                                        <i className="bx bxs-envelope"></i>
                                                                </span>
                                                                <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="ایمیل"
                                                                        aria-describedby="email-address"
                                                                        value={inputEmail}
                                                                        onChange={(e) => setInputEmail(e.target.value)}
                                                                />
                                                        </div>

                                                        <div className="input-group">
                                                                <span className="input-group-addon" id="password">
                                                                        <i className="bx bxs-lock-alt"></i>
                                                                </span>
                                                                <input
                                                                        type="password"
                                                                        className="form-control"
                                                                        placeholder="رمز عبور "
                                                                        aria-describedby="password"
                                                                        value={inputPassword}
                                                                        onChange={(e) => setInputPassword(e.target.value)}
                                                                />
                                                        </div>

                                                        <div className="remember-me">
                                                                <label>
                                                                        <input type="checkbox" name="" value={remeber} onChange={() => setRemeber(!remeber)} /> مرا بخاطر بسپار{" "}
                                                                </label>
                                                        </div>

                                                        <div className="link">
                                                                <a href="">
                                                                        {" "}
                                                                        <i className="bx bxs-lock-alt"></i> رمز عبور خود را فراموش کرده ام !
                                                                </a>
                                                                <Link to="/regester">
                                                                        {" "}
                                                                        <i className="bx bxs-user-account"></i> عضویت در سایت{" "}
                                                                </Link>
                                                        </div>

                                                        <button className="btn btn-success" type="submit" onClick={(e) => handelSubmit(e)}>
                                                                ورود به سایت
                                                        </button>
                                                </form>
                                        </div>
                                </div>
                        </main>
                </>
        );
}

export default Login;
