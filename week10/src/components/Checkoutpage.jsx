import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/sass/section/checkoutpage.scss";

import Menu from "./Menu";

import logo from "../assets/img/logo.svg";
import menu from "../assets/img/menu.svg";
import search from "../assets/img/search.svg";
import bag from "../assets/img/bag.svg";
import line from "../assets/img/line.svg";

import productImg from "../assets/img/category2.png";
import voucher from "../assets/img/Voucher.svg";
import delivery from "../assets/img/Delivery.svg";

const Checkoutpage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="checkout_wrap">
            <section className="checkout_nav">
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

            <section className="checkout_title">
                <h2>CHECKOUT</h2>
                <img src={line} alt="" className="line" />
            </section>

            <section className="checkout_content">
                <div className="checkout_product">
                    <div className="product_img">
                        <img src={productImg} alt="checkout product" />
                    </div>

                    <div className="product_info">
                        <h3>LAMEREI</h3>
                        <p>Recycle Boucle Knit Cardigan Pink</p>

                        <div className="quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>

                        <strong>$120</strong>
                    </div>
                </div>

                <div className="checkout_option">
                    <div className="option_row">
                        <div>
                            <img src={voucher} alt="" />
                            <span>Add promo code</span>
                        </div>
                    </div>

                    <div className="option_row">
                        <div>
                            <img src={delivery} alt="" />
                            <span>Delivery</span>
                        </div>

                        <p>Free</p>
                    </div>
                </div>
            </section>

            <section className="checkout_bottom">
                <div className="total_row">
                    <span>EST. TOTAL</span>
                    <strong>$240</strong>
                </div>

                <button className="checkout_btn">
                    <img src={bag} alt="" />
                    CHECKOUT
                </button>
            </section>

            {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
        </div>
    );
};

export default Checkoutpage;