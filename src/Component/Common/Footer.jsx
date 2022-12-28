import React from "react";
import { Link } from "react-router-dom";

function Footer() {
        return (
                <footer>
                        <div className="top-footer">
                                <div className="container">
                                        <div className="row">
                                                <div className="col-lg-9 col-xs-12">
                                                        <section className="list">
                                                                <header>
                                                                        <h4>دسترسی سریع</h4>
                                                                </header>
                                                                <ul>
                                                                        <li>
                                                                                <Link to="/">مشاهده تمامی دوره ها</Link>
                                                                        </li>
                                                                        <li>
                                                                                <Link to="/">قوانین خرید از سایت </Link>
                                                                        </li>
                                                                        <li>
                                                                                <Link to="/">راهنمای خرید از سایت </Link>
                                                                        </li>
                                                                        <li>
                                                                                <Link to="/">همکاری با تاپ لرن </Link>
                                                                        </li>
                                                                        <li>
                                                                                <Link to="/">کسب درآمد از تاپ لرن </Link>
                                                                        </li>
                                                                        <li>
                                                                                <Link to="/">ماهنامه طراحی وب</Link>
                                                                        </li>
                                                                </ul>
                                                        </section>
                                                </div>
                                                <div className="col-lg-3 col-xs-12">
                                                        <section className="list social">
                                                                <header>
                                                                        <h4>راه های ارتباطی</h4>
                                                                </header>
                                                                <ul>
                                                                        <li>
                                                                                <Link to="/">
                                                                                        <i className="bx bxl-gmail"></i>{" "}
                                                                                </Link>
                                                                        </li>
                                                                        <li>
                                                                                <Link to="/">
                                                                                        <i className="bx bxl-telegram"></i>
                                                                                </Link>
                                                                        </li>

                                                                        <li>
                                                                                <Link to="/">
                                                                                        <i className="bx bxl-linkedin"></i>
                                                                                </Link>
                                                                        </li>
                                                                        <li>
                                                                                <Link to="/">
                                                                                        <i className="bx bxl-twitter"></i>
                                                                                </Link>
                                                                        </li>
                                                                        <li>
                                                                                <Link to="/">
                                                                                        <i className="bx bxl-instagram"></i>
                                                                                </Link>
                                                                        </li>
                                                                        <li>
                                                                                <Link to="/">
                                                                                        <i className="bx bxl-twitch"></i>
                                                                                </Link>
                                                                        </li>
                                                                </ul>
                                                        </section>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="bottom-footer">
                                <div className="row">
                                        <p>این قالب متعلق به آکادمی تاپ لرن می باشد و توسط Abofazl Adhami تغییر و به قالب REACT برنامه نویسی شده برای رزومه و...</p>
                                </div>
                                <div className="row">
                                        <a href="https://www.linkedin.com/in/abolfazl-adhami-020388247/">
                                                <i className="bx bxl-linkedin"></i>
                                        </a>
                                        <a href="https://github.com/AbolfazlAdhami">
                                                <i className="bx bxl-github"></i>
                                        </a>
                                </div>
                        </div>
                </footer>
        );
}

export default Footer;
