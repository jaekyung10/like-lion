import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "../assets/sass/section/homepage.scss";


import logo from "../assets/img/logo.svg";
import menu from "../assets/img/menu.svg";
import search from "../assets/img/search.svg";
import bag from "../assets/img/bag.svg";
import home1 from "../assets/img/home1.png";
import line from "../assets/img/line.svg";
import arrow from "../assets/img/arrow.svg";

import new1 from "../assets/img/new1.png";
import new2 from "../assets/img/new2.png";
import new3 from "../assets/img/new3.png";
import new4 from "../assets/img/new4.png";

import prada from "../assets/img/Prada.svg";
import burberry from "../assets/img/Burberry.svg";
import boss from "../assets/img/Boss.svg";
import cartier from "../assets/img/Catier.svg";
import gucci from "../assets/img/Gucci.svg";
import tiffany from "../assets/img/TiffanyandCo.svg";

import home2 from "../assets/img/home2.png";
import home3 from "../assets/img/home3.svg";
import video from "../assets/img/Video.svg";

import just1 from "../assets/img/justforyou1.png";
import just2 from "../assets/img/justforyou2.png";
import indicator from "../assets/img/Indicator.svg";

import sticker1 from "../assets/img/sticker1.svg";
import sticker2 from "../assets/img/sticker2.svg";
import sticker3 from "../assets/img/sticker3.svg";
import sticker4 from "../assets/img/sticker4.svg";
import sticker5 from "../assets/img/sticker5.svg";

import instagram1 from "../assets/img/Instagram.svg";

import insta1 from "../assets/img/insta1.svg";
import insta2 from "../assets/img/insta2.svg";
import insta3 from "../assets/img/insta3.svg";
import insta4 from "../assets/img/insta4.svg";

import instagram2 from "../assets/img/Instagram2.svg";
import twitter from "../assets/img/Twitter.svg";
import youtube from "../assets/img/YouTube.svg";

const Homepage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="home_wrap">
            <section className="home_nav">
                <img
                    src={menu}
                    alt="menu"
                    className="menu_icon"
                    onClick={() => setIsMenuOpen(true)}
                />
                <img src={logo} alt="Open Fashion logo" className="logo" />
                <div className="nav_right">
                    <Link to="/search">
                        <img src={search} alt="search" />
                    </Link>
                    <Link to="/checkout">
                        <img src={bag} alt="bag" />
                    </Link>
                </div>
            </section>

            <section className="mainpage">
                <img src={home1} alt="" className="main_img" />
                <h1 className="main_title">
                    <span className="title_01">LUXURY</span>
                    <span className="title_02">FASHION</span>
                    <span className="title_03">&ACCESSOR</span>
                    <span className="title_04">IES</span>
                </h1>

                <button className="main_btn">EXPLORE COLLECTION</button>
                <div className="main_indicator">
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                </div>
            </section>

            <section className="new_arrival">
                <h2 className="section_title">NEW ARRIVAL</h2>
                <img src={line} alt="" className="line_img" />
                <ul className="category_menu">
                    <li className="active">All</li>
                    <li>Apparel</li>
                    <li>Dress</li>
                    <li>Tshirt</li>
                    <li>Bag</li>
                </ul>
                <div className="icon" />

                <div className="product_list">
                    <div className="product_item">
                        <img src={new1} alt="product" />
                        <p>21WN reversible angora cardigan</p>
                        <span>$120</span>
                    </div>

                    <div className="product_item">
                        <img src={new2} alt="product" />
                        <p>21WN reversible angora cardigan</p>
                        <span>$120</span>
                    </div>

                    <div className="product_item">
                        <img src={new3} alt="product" />
                        <p>21WN reversible angora cardigan</p>
                        <span>$120</span>
                    </div>

                    <div className="product_item">
                        <img src={new4} alt="product" />
                        <p>Oblong bag</p>
                        <span>$120</span>
                    </div>
                </div>
                <Link to="/category" className="explore_more">
                    Explore More
                    <img src={arrow} alt="" />
                </Link>
            </section>

            <section className="brand_section">
                <img src={line} alt="" className="line" />
                <div className="brand_grid">
                    <img src={prada} alt="Prada" />
                    <img src={burberry} alt="Burberry" />
                    <img src={boss} alt="Boss" />
                    <img src={cartier} alt="Cartier" />
                    <img src={gucci} alt="Gucci" />
                    <img src={tiffany} alt="Tiffany and Co" />
                </div>
                <img src={line} alt="" className="line" />
            </section>

            <section className="collections">
                <h2 className="section_title">COLLECTIONS</h2>
                <div className="collection_october">
                    <img src={home2} alt="October collection" />
                    <div className="october_text">
                        <strong>10</strong>
                        <p>
                            Octo<br />
                            ber
                        </p>
                        <span>COLLECTION</span>
                    </div>
                </div>
                <div className="collection_autumn">
                    <img src={home3} alt="Autumn collection" />
                    <div className="autumn_text">
                        <p>Autumn</p>
                        <span>COLLECTION</span>
                    </div>
                </div>
                <div className="video_box">
                    <img src={video} alt="video" />
                </div>
            </section>

            <section className="justforyou">
                <h2 className="section_title">JUST FOR YOU</h2>
                <img src={line} alt="" className="line" />
                <div className="just_list">
                    <div className="product_item">
                        <img src={just1} alt="" />
                        <p>Harris Tweed Three button<br />Jacket</p>
                        <span>$120</span>
                    </div>

                    <div className="product_item">
                        <img src={just2} alt="" />
                        <p>Cashmere Blend Cropped<br />Jacket SW1WJ285-AM</p>
                        <span>$120</span>
                    </div>
                </div>
                <img src={indicator} alt="" className="indicator" />
            </section>

            <section className="trending">
                <h2>@TRENDING</h2>
                <div className="tag_list">
                    <span>#2021</span>
                    <span>#spring</span>
                    <span>#collection</span>
                    <span>#fall</span>
                    <span>#dress</span>
                    <span>#autumncollection</span>
                    <span>#openfashion</span>
                </div>
            </section>

            <section className="about_brand">
                <img src={logo} alt="Open Fashion logo" className="logo" />

                <p>
                    Making a luxurious lifestyle accessible<br />
                    for a generous group of women is our<br />
                    daily drive.
                </p>
                <img src={line} alt="" className="line" />

                <div className="service_grid">
                    <div>
                        <img src={sticker1} alt="" />
                        <p>Fast shipping. Free on<br />orders over $25.</p>
                    </div>
                    <div>
                        <img src={sticker2} alt="" />
                        <p>Sustainable process<br />from start to finish.</p>
                    </div>
                    <div>
                        <img src={sticker3} alt="" />
                        <p>Unique designs<br />and high-quality materials.</p>
                    </div>
                    <div>
                        <img src={sticker4} alt="" />
                        <p>Fast shipping.<br />Free on orders over $25.</p>
                    </div>
                </div>
                <img src={sticker5} alt="" className="brand_bottom_icon" />
            </section>

            <section className="follow_us">
                <h2 className="section_title">FOLLOW US</h2>
                <img src={instagram1} alt="instagram" className="follow_icon" />
                <div className="insta_grid">
                    <div>
                        <img src={insta1} alt="instagram 1" />
                        <span>@mia</span>
                    </div>
                    <div>
                        <img src={insta2} alt="instagram 2" />
                        <span>@_jihyn</span>
                    </div>
                    <div>
                        <img src={insta3} alt="instagram 3" />
                        <span>@mia</span>
                    </div>
                    <div>
                        <img src={insta4} alt="instagram 4" />
                        <span>@_jihyn</span>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="sns">
                    <img src={twitter} alt="twitter" />
                    <img src={instagram2} alt="instagram" />
                    <img src={youtube} alt="youtube" />
                </div>
                <img src={line} alt="" className="line" />

                <p>support@openui.design</p>
                <p>+60 825 876</p>
                <p>08:00 - 22:00 - Everyday</p>

                <img src={line} alt="" className="line" />

                <ul>
                    <li>
                        <Link to="/ourstory">About</Link>
                    </li>
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
    )
}

export default Homepage;
