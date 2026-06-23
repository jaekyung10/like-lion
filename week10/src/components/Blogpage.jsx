import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/sass/section/blogpage.scss";
import Menu from "./Menu";

import logo from "../assets/img/logo.svg";
import menu from "../assets/img/menu.svg";
import search from "../assets/img/search.svg";
import bag from "../assets/img/bag.svg";
import line from "../assets/img/line.svg";

import blog1 from "../assets/img/blog1.png";
import blog2 from "../assets/img/blog2.png";
import blog3 from "../assets/img/blog3.png";
import blog4 from "../assets/img/blog4.png";
import bookmark from "../assets/img/Bookmark.svg";
import plus from "../assets/img/Plus.svg";

import twitter from "../assets/img/Twitter.svg";
import instagram from "../assets/img/Instagram2.svg";
import youtube from "../assets/img/YouTube.svg";


const Blogpage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="blog_wrap">
            <section className="blog_nav">
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

            <section className="blog_title">
                <h2>BLOG</h2>
                <img src={line} alt="" className="line" />
            </section>

            <section className="blog_category">
                <span>Fashion</span>
                <span>Prom</span>
                <span>Policy</span>
                <span>Lookbook</span>
                <span>Sale</span>
            </section>

            <section className="blog_list">
                <article className="blog_card">
                    <div className="blog_img_box">
                        <img src={blog1} alt="" />

                        <img src={bookmark} alt="" className="bookmark_icon" />
                        <h3>
                            2021 STYLE GUIDE: THE BIGGEST
                            <br />
                            FALL TRENDS
                        </h3>
                    </div>
                    <div className="blog_info">
                        <div className="tags">
                            <span>#Fashion</span>
                            <span>#Tips</span>
                        </div>
                        <p>4 days ago</p>
                    </div>
                </article>

                <article className="blog_card">
                    <div className="blog_img_box">
                        <img src={blog2} alt="" />
                        <img src={bookmark} alt="" className="bookmark_icon" />
                        <h3>
                            2021 STYLE GUIDE: THE BIGGEST
                            <br />
                            FALL TRENDS
                        </h3>
                    </div>
                    <div className="blog_info">
                        <div className="tags">
                            <span>#Fashion</span>
                            <span>#Tips</span>
                        </div>
                        <p>4 days ago</p>
                    </div>
                </article>

                <article className="blog_card">
                    <div className="blog_img_box">
                        <img src={blog3} alt="" />
                        <img src={bookmark} alt="" className="bookmark_icon" />
                        <h3>
                            2021 STYLE GUIDE: THE BIGGEST
                            <br />
                            FALL TRENDS
                        </h3>
                    </div>
                    <div className="blog_info">
                        <div className="tags">
                            <span>#Fashion</span>
                            <span>#Tips</span>
                        </div>
                        <p>4 days ago</p>
                    </div>
                </article>

                <article className="blog_card">
                    <div className="blog_img_box">
                        <img src={blog4} alt="" />
                        <img src={bookmark} alt="" className="bookmark_icon" />
                        <h3>
                            2021 STYLE GUIDE: THE BIGGEST
                            <br />
                            FALL TRENDS
                        </h3>
                    </div>
                    <div className="blog_info">
                        <div className="tags">
                            <span>#Fashion</span>
                            <span>#Tips</span>
                        </div>
                        <p>4 days ago</p>
                    </div>
                </article>
            </section>

            <button className="load_more">
                LOAD MORE
                <img src={plus} alt="" />
            </button>
            <footer className="blog_footer">
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
                    <li>Contact</li>
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

export default Blogpage;