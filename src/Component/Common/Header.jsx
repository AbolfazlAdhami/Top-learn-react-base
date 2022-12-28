import * as React from "react";
import { Link } from "react-router-dom";

function Header() {
        return (
                <>
                        <header>
                                <Link to="/" className="logo">
                                        <img src="images/logo.png" />
                                </Link>
                                <h1>با اساتید مجرب و کارآزموده در خودآموز تاپ لرن</h1>
                                <h2>آموزش ببینید ، تجربه کسب کنید و بازار کار شوید</h2>
                                <h3>با کمترین هزینه خودت یاد بگیر</h3>
                        </header>
                        <div className="search-form">
                                <form>
                                        <input type="text" name="" placeholder="چی دوست داری یاد بگیری ؟" />
                                        <button>
                                                <i className="zmdi zmdi-search"></i>
                                        </button>
                                </form>
                        </div>
                </>
        );
}
export default Header;
