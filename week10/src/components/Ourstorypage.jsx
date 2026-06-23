import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/sass/section/ourstorypage.scss";
import Menu from "./Menu";

import logo from "../assets/img/logo.svg";
import menu from "../assets/img/menu.svg";
import search from "../assets/img/search.svg";
import bag from "../assets/img/bag.svg";
import line from "../assets/img/line.svg";
import arrow from "../assets/img/arrow.svg";

import ourstory from "../assets/img/ourstory.png";

const Ourstorypage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="ourstory_wrap">
            <section className="ourstory_nav">
                <img
                    src={menu}
                    alt="menu"
                    className="menu_icon"
                    onClick={() => setIsMenuOpen(true)}
                />

                <Link to="/">
                    <img src={logo} alt="Open Fashion logo" className="logo" />
                </Link>

                <div className="nav_right">
                    <Link to="/search">
                        <img src={search} alt="search" />
                    </Link>

                    <Link to="/checkout">
                        <img src={bag} alt="bag" />
                    </Link>
                </div>
            </section>

            <section className="ourstory_title">
                <h2>OUR STORY</h2>
                <img src={line} alt="" className="line" />
            </section>

            <section className="story_content">
                <p>
                    Open Fashion - Free Ecommerce UI Kit is a free download UI kit. You
                    can open Open Fashion - Free Ecommerce UI Kit file by Figma.
                </p>

                <p>
                    Create stunning shop with bulletproof guidelines and thoughtful
                    components. Its library contains more than 50+ components supporting
                    Light & Dark Mode and 60+ ready to use mobile screens.
                </p>

                <img src={ourstory} alt="our story" className="story_img" />
            </section>

            <section className="signup">
                <h2>SIGN UP</h2>
                <img src={line} alt="" className="line" />

                <p>
                    Receive early access to new arrivals, sales,
                    <br />
                    exclusive content, events and much more!
                </p>

                <input type="text" placeholder="Email address" />

                <button>
                    SUBMIT
                    <img src={arrow} alt="" />
                </button>
            </section>

            {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
        </div>
    );
};

export default Ourstorypage;