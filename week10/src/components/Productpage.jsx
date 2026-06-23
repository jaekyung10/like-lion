import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "../assets/sass/section/productpage.scss";

import logo from "../assets/img/logo.svg";
import menu from "../assets/img/menu.svg";
import search from "../assets/img/search.svg";
import bag from "../assets/img/bag.svg";
import line from "../assets/img/line.svg";

import detail1 from "../assets/img/detail1.png";
import more from "../assets/img/more.svg";
import exportIcon from "../assets/img/Export.svg";
import plus from "../assets/img/Plus.svg";
import heart2 from "../assets/img/heart2.svg";

import icon1 from "../assets/img/icon1.svg";
import icon2 from "../assets/img/icon2.svg";
import icon3 from "../assets/img/icon3.svg";
import icon4 from "../assets/img/icon4.svg";

import shipping from "../assets/img/Shipping.svg";
import tag from "../assets/img/Tag.svg";
import refresh from "../assets/img/Refresh.svg";
import forward from "../assets/img/Forward.svg";

import category3 from "../assets/img/category3.png";
import category4 from "../assets/img/category4.png";
import heart from "../assets/img/heart.svg";

import twitter from "../assets/img/Twitter.svg";
import instagram from "../assets/img/Instagram2.svg";
import youtube from "../assets/img/YouTube.svg";

const Productpage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="product_wrap">
            <section className="product_nav">
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

            <section className="product_visual">
                <img src={detail1} alt="product detail" className="detail_img" />
                <img src={more} alt="" className="more_icon" />
            </section>

            <div className="detail_indicator">
                <span className="active"></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <section className="product_info">
                <div className="product_name_row">
                    <h2>MOHAN</h2>
                    <img src={exportIcon} alt="" className="export_icon" />
                </div>

                <p>Recycle Boucle Knit Cardigan Pink</p>
                <strong>$120</strong>

                <div className="option_area">
                    <div className="color_option">
                        <span>Color</span>
                        <button className="color black"></button>
                        <button className="color brown"></button>
                        <button className="color gray"></button>
                    </div>

                    <div className="size_option">
                        <span>Size</span>
                        <button className="active">S</button>
                        <button>M</button>
                        <button>L</button>
                    </div>
                </div>
            </section>

            <section className="basket_bar">
                <button className="basket_btn">
                    <img src={plus} alt="" className="plus_icon" />
                    ADD TO BASKET
                </button>

                <img src={heart2} alt="" className="basket_heart" />
            </section>

            <section className="description">
                <div className="desc_block">
                    <h3>MATERIALS</h3>
                    <p>
                        We work with monitoring programmes to ensure compliance with safety,
                        health and quality standards for our products.
                    </p>
                </div>

                <div className="desc_block">
                    <h3>CARE</h3>
                    <p>
                        To keep your jackets and coats clean, you only need to freshen them
                        up and go over them with a cloth or a clothes brush. If you need to
                        dry clean a garment, look for a dry cleaner that uses technologies
                        that are respectful of the environment.
                    </p>
                </div>

                <ul className="care_list">
                    <li>
                        <img src={icon1} alt="" />
                        <span>Do not use bleach</span>
                    </li>
                    <li>
                        <img src={icon2} alt="" />
                        <span>Do not tumble dry</span>
                    </li>
                    <li>
                        <img src={icon3} alt="" />
                        <span>Dry clean with tetrachloroethylene</span>
                    </li>
                    <li>
                        <img src={icon4} alt="" />
                        <span>Iron at a maximum of 110ºC/230ºF</span>
                    </li>
                </ul>
            </section>

            <section className="policy">
                <h3 className="policy_title">CARE</h3>
                <div className="policy_item open">
                    <div className="policy_head">
                        <div>
                            <img src={shipping} alt="" />
                            <span>Free Flat Rate Shipping</span>
                        </div>
                        <img src={forward} alt="" className="arrow up" />
                    </div>

                    <p>
                        Estimated to be delivered on
                        <br />
                        09/11/2021 - 12/11/2021.
                    </p>
                </div>

                <div className="policy_item">
                    <div className="policy_head">
                        <div>
                            <img src={tag} alt="" />
                            <span>COD Policy</span>
                        </div>
                        <img src={forward} alt="" className="arrow down" />
                    </div>
                </div>

                <div className="policy_item">
                    <div className="policy_head">
                        <div>
                            <img src={refresh} alt="" />
                            <span>Return Policy</span>
                        </div>
                        <img src={forward} alt="" className="arrow down" />
                    </div>
                </div>
            </section>

            <section className="recommend">
                <h2>YOU MAY ALSO LIKE</h2>
                <img src={line} alt="" className="line" />

                <div className="recommend_list">
                    <div className="recommend_item">
                        <div className="recommend_img">
                            <img src={category3} alt="recommend product" />
                            <img src={heart} alt="" className="heart_icon" />
                        </div>
                        <p>
                            21WN
                            <br />
                            reversible angora cardigan
                        </p>
                        <span>$120</span>
                    </div>

                    <div className="recommend_item">
                        <div className="recommend_img">
                            <img src={category4} alt="recommend product" />
                            <img src={heart} alt="" className="heart_icon" />
                        </div>
                        <p>
                            lame
                            <br />
                            reversible angora cardigan
                        </p>
                        <span>$120</span>
                    </div>

                    <div className="recommend_item">
                        <div className="recommend_img">
                            <img src={category3} alt="recommend product" />
                            <img src={heart} alt="" className="heart_icon" />
                        </div>
                        <p>
                            21WN
                            <br />
                            reversible angora cardigan
                        </p>
                        <span>$120</span>
                    </div>

                    <div className="recommend_item">
                        <div className="recommend_img">
                            <img src={category4} alt="recommend product" />
                            <img src={heart} alt="" className="heart_icon" />
                        </div>
                        <p>
                            lame
                            <br />
                            reversible angora cardigan
                        </p>
                        <span>$120</span>
                    </div>
                </div>
            </section>

            <footer className="product_footer">
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

export default Productpage;