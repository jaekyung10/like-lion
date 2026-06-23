import React from "react";
import { Link } from "react-router-dom";
import "../assets/sass/section/categorypage.scss";

import logo from "../assets/img/logo.svg";
import menu from "../assets/img/menu.svg";
import search from "../assets/img/search.svg";
import bag from "../assets/img/bag.svg";
import line from "../assets/img/line.svg";

import down from "../assets/img/Down.svg";
import filter from "../assets/img/Filter.svg";
import gridview from "../assets/img/gridview.svg";
import heart from "../assets/img/heart.svg";
import star from "../assets/img/Star.svg";
import forward from "../assets/img/Forward.svg";

import category1 from "../assets/img/category1.png";
import category2 from "../assets/img/category2.png";
import category3 from "../assets/img/category3.png";
import category4 from "../assets/img/category4.png";
import category5 from "../assets/img/category5.png";
import category6 from "../assets/img/category6.png";
import category7 from "../assets/img/category7.png";
import category8 from "../assets/img/category8.png";
import category9 from "../assets/img/category9.png";
import category10 from "../assets/img/category10.png";

import twitter from "../assets/img/Twitter.svg";
import instagram from "../assets/img/Instagram2.svg";
import youtube from "../assets/img/YouTube.svg";

const Categorypage = () => {
    const products = [
        category1,
        category2,
        category3,
        category4,
        category5,
        category6,
        category7,
        category8,
        category9,
        category10,
    ];

    return (
        <div className="category_wrap">
            <section className="category_nav">
                <img src={menu} alt="menu" className="menu_icon" />

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

            <section className="category_top">
                <h2>4500 APPAREL</h2>

                <div className="category_option">
                    <button className="sort_btn">
                        New
                        <img src={down} alt="" />
                    </button>

                    <button className="icon_btn">
                        <img src={gridview} alt="" />
                    </button>

                    <button className="icon_btn">
                        <img src={filter} alt="" />
                    </button>
                </div>
            </section>

            <section className="category_list">
                {products.map((img, index) => (
                    <article className="category_item">
                        <Link to="/product" className="item_img">
                            <img src={img} alt="product" />
                        </Link>

                        <div className="item_info">
                            <Link to="/product" className="item_text_link">
                                <h3>LAMEREI</h3>
                                <p>Recycle Boucle Knit Cardigan Pink</p>
                            </Link>

                            <strong>$120</strong>

                            <div className="rating">
                                <img src={star} alt="" />
                                <span>4.8 Ratings</span>
                            </div>

                            <div className="size_box">
                                <span>Size</span>
                                <button type="button">S</button>
                                <button type="button">M</button>
                                <button type="button">L</button>
                            </div>
                        </div>

                        <img src={heart} alt="" className="heart_icon" />
                    </article>
                ))}
            </section>

            <section className="pagination">
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <img src={forward} alt="" />
            </section>

            <footer className="category_footer">
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
        </div>
    );
};

export default Categorypage;