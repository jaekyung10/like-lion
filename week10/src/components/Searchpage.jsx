import React from "react";
import { Link } from "react-router-dom";
import "../assets/sass/section/searchpage.scss";

import search from "../assets/img/search.svg";

const Searchpage = () => {
    return (
        <div className="search_wrap">
            <section className="search_box">
                <div className="search_input_area">
                    <img src={search} alt="search" />

                    <input type="text" placeholder="Search items" />

                    <Link to="/" className="close_btn" aria-label="close"></Link>
                </div>

                <div className="popular_terms">
                    <p>Popular search terms</p>

                    <ul>
                        <li>Trend</li>
                        <li>Dress</li>
                        <li>Bag</li>
                        <li>Tshirt</li>
                        <li>Beauty</li>
                        <li>Accessories</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Searchpage;