import React from 'react'
import Logo from '../../assets/img/logo.svg'
import '../../assets/sass/nav.scss'

const Nav = () => {
  return (
        <div className="nav_wrap">
            <img src={Logo} alt="" className="logo" />
            <div className="list">
                <div className="nav1">브랜드 스토리</div>
                <div className="nav2">서비스 소개</div>
                <div className="nav3">미디어</div>
                <div className="nav4">채용</div>
            </div>
        </div>
    )
}

export default Nav
