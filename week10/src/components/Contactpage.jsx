import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/sass/section/contactpage.scss";
import Menu from "./Menu";

import logo from "../assets/img/logo.svg";
import menu from "../assets/img/menu.svg";
import search from "../assets/img/search.svg";
import bag from "../assets/img/bag.svg";
import line from "../assets/img/line.svg";

import chat from "../assets/img/Chat.svg";
import message from "../assets/img/Message.svg";
import twitter2 from "../assets/img/Twitter2.svg";

import twitter from "../assets/img/Twitter.svg";
import instagram from "../assets/img/Instagram2.svg";
import youtube from "../assets/img/YouTube.svg";

const Contactpage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="contact_wrap">
            <section className="contact_nav">
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

            <section className="contact_title">
                <h2>CONTACT US</h2>
                <img src={line} alt="" className="line" />
            </section>

            <section className="contact_content">
                <div className="contact_block">
                    <img src={chat} alt="" className="contact_icon" />

                    <p>
                        Need an ASAP answer? Contact us via chat, 24/7! For existing
                        furniture orders, please call us.
                    </p>

                    <button>CHAT WITH US</button>
                </div>

                <div className="contact_block">
                    <img src={message} alt="" className="contact_icon" />

                    <p>
                        You can text us at 800-309-2622 — or click on the “text us” link
                        below on your mobile device. Please allow the system to acknowledge
                        a simple greeting even (“Hi” will do!) before providing your
                        question/ order details. Consent is not required for any purchase.
                        Message and data rates may apply. Text messaging may not be
                        available via all carriers.
                    </p>

                    <button>TEXT US</button>
                </div>

                <div className="contact_block twitter_block">
                    <img src={twitter2} alt="" className="twitter2_icon" />

                    <p>
                        To send us a private or direct message, like @Open Fashion on{" "}
                        <u>Facebook</u> or follow us on <u>Twitter</u>. We’ll get back to you ASAP.
                        Please include your name, order number, and email address for a
                        faster response!
                    </p>
                </div>
            </section>

            <footer className="contact_footer">
                <div className="sns">
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
                    <img src={youtube} alt="youtube" />
                </div>

                <img src={line} alt="" className="line" />

                <p>support@openui.design</p>
                <p>+60 825 876</p>
                <p>08:00 - 22:00 - Everyday</p>

                <img src={line} alt="" className="line" />

                <ul>
                    <li>About</li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>

                <div className="copyright">
                    Copyright© OpenUI All Rights Reserved.
                </div>
            </footer>

            {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
        </div>
    );
};

export default Contactpage;