import React from 'react'
import logo_b from '../../assets/img/logo_b.png'
import footerimg from '../../assets/img/footer.png'
import '../../assets/sass/footer.scss'

const Footer = () => {
  return (
    <div className="footer_wrap">
        <img src={logo_b} className='logo_b' />
        <div className="footer_content">
            <img src={footerimg} className='footer_img'/>
        </div>
    </div>
  )
}

export default Footer
