import React, { useState } from 'react'
import Logo from '../../assets/img/logo.png'
import nav1 from '../../assets/img/nav1.png'
import nav2 from '../../assets/img/nav2.png'
import nav3 from '../../assets/img/nav3.png'
import nav4 from '../../assets/img/nav4.png'
import left_icon from '../../assets/img/img_left.png'
import right_icon from '../../assets/img/img_right.png'
import banner1 from '../../assets/img/img1.png'
import banner2 from '../../assets/img/img2.png'
import banner3 from '../../assets/img/img3.png'
import banner4 from '../../assets/img/img4.png'
import banner5 from '../../assets/img/img5.png'
import '../../assets/sass/nav.scss'

const Nav = () => {
    const [bannerIndex, setBannerIndex] = useState(0)
    
    const banners = [banner1, banner2, banner3, banner4, banner5]

    const nextBanner = () => {
        setBannerIndex((prev) =>
            prev === banners.length - 1 ? 0 : prev + 1
        )
    }

    const prevBanner = () => {
        setBannerIndex((prev) =>
            prev === 0 ? banners.length - 1 : prev - 1
        )
    }

    return (
        <header className="header_wrap">
        <div
            className="banner_track"
            style={{
                transform: `translateX(-${bannerIndex * 100}%)`,
            }}
        >
            {banners.map((banner, index) => (
                <div className="banner_slide" key={index}>
                <img src={banner} alt={`banner ${index + 1}`} />
                </div>
            ))}
        </div>

        <nav className="nav_wrap">
            <div className="logo">
            <img src={Logo} alt="logo" />
            </div>

            <ul className="list">
                <li>WOMEN</li>
                <li>MEN</li>
                <li>KIDS</li>
                <li>TENNIS</li>
                <li>BRAND</li>
            </ul>

            <div className="icons">
                <img src={nav1} alt="icon1" />
                <img src={nav2} alt="icon2" />
                <img src={nav3} alt="icon3" />
                <img src={nav4} alt="icon4" />
            </div>
        </nav>

        <div className="hero_text">
            <h3>24 NEW 인터런</h3>
            <button>자세히 보기</button>
        </div>

        <button className="arrow_btn left" onClick={prevBanner}>
            <img src={left_icon} alt="left" />
        </button>

        <button className="arrow_btn right" onClick={nextBanner}>
            <img src={right_icon} alt="right" />
        </button>

        <div className="progress_wrap">
            {banners.map((_, index) => (
            <div
                key={index}
                className={`progress_bar ${
                    bannerIndex === index ? 'active' : ''
                }`}
            />
            ))}
        </div>
    </header>
  )
}

export default Nav
