import React from "react";

import call from "../assets/img/Call.svg";
import location from "../assets/img/Location.svg";
import forward from "../assets/img/Forward.svg";

import line from "../assets/img/line.svg";
import twitter from "../assets/img/Twitter.svg";
import instagram from "../assets/img/Instagram2.svg";
import youtube from "../assets/img/YouTube.svg";

const Menu = ({ onClose }) => {
    return (
        <div className="menu_overlay">
            <div className="menu_box">
                <button className="menu_close" onClick={onClose}>
                    ×
                </button>

                <div className="menu_tab">
                    <span className="active">WOMEN</span>
                    <span>MAN</span>
                    <span>KIDS</span>
                </div>

                <ul className="menu_list">
                    <li>
                        <span>New</span>
                        <img src={forward} alt="" />
                    </li>
                    <li>
                        <span>Apparel</span>
                        <img src={forward} alt="" />
                    </li>
                    <li>
                        <span>Bag</span>
                        <img src={forward} alt="" />
                    </li>
                    <li>
                        <span>Shoes</span>
                        <img src={forward} alt="" />
                    </li>
                    <li>
                        <span>Beauty</span>
                        <img src={forward} alt="" />
                    </li>
                    <li>
                        <span>Accessories</span>
                        <img src={forward} alt="" />
                    </li>
                </ul>

                <div className="menu_info">
                    <div>
                        <img src={call} alt="" />
                        <span>(786) 713-8616</span>
                    </div>

                    <div>
                        <img src={location} alt="" />
                        <span>Store locator</span>
                    </div>
                </div>

                <img src={line} alt="" className="menu_line" />

                <div className="menu_sns">
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
                    <img src={youtube} alt="youtube" />
                </div>
            </div>
        </div>
    );
};

export default Menu;