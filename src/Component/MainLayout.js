import React, { Fragment } from "react";
import { Outlet, useParams } from "react-router";

import TopNav from "./Nav/TopNav";
import Header from "./Common/Header";
import MainNav from "./Nav/MainNav";
import Footer from "./Common/Footer";

function MainLayout({ props, id }) {
        return (
                <Fragment>
                        <div className="landing-layer">
                                <div className="container">
                                        <TopNav />
                                        {id == null ? <Header /> : null}
                                </div>
                        </div>

                        <MainNav />
                        <main id="home-page">
                                <div className="container">{props}</div>
                        </main>
                        <Footer />
                </Fragment>
        );
}
export default MainLayout;
