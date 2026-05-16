import React from 'react'
import Logo2 from '../../assets/img/logo_vector.svg'
import instagram from '../../assets/img/icon_instagram.svg'
import youtube from '../../assets/img/icon_youtube.svg'
import brunch from '../../assets/img/icon_brunch.svg'
import icon1 from '../../assets/img/icon1.svg'
import icon2 from '../../assets/img/icon2.svg'
import icon3 from '../../assets/img/icon3.png'
import '../../assets/sass/footer.scss'

const Footer = () => {
  return (
        <div className="footer_wrap">
          <div className="footer_left">
            <img src={Logo2} alt="" className="logo_vector" />

            <div className="footer_content">
              <span>(주)멋쟁이사자처럼 | 대표이사 나성영</span>
              <span>서울특별시 종로구 종로3길 17 D타워, 16-17층</span>
              <span>사업자 번호 : 264-88-01106</span>
              <span>통신판매업 신고번호 : 2022-서울종로-1534</span>
            </div>

            <div className="footer_contact">
              <img src={icon3} alt="" className="icon3" />
              <span>문의처 contact@likelion.net</span>
            </div>

            <div className="footer_icon">
              <img src={instagram} alt="" className="instagram" />
              <img src={youtube} alt="" className="youtube" />
              <img src={brunch} alt="" className="brunch" />
            </div>
          </div>

          <div className="footer_right">
            <div className="footer_column">
              <div className="footer_title">FAMILY BRAND</div>
              <div className="footer_text">TECHIT</div>
              <div className="footer_text">SYLTARE</div>
              <div className="footer_text">MODERN LION</div>
              <div className="footer_text">QUADHASH</div>
            </div>

            <div className="footer_column">
              <div className="footer_title">POLICY</div>
              <div className="footer_text">이용약관</div>
              <div className="footer_text">개인정보처리방침</div>
              
              <div className="footer_text icon_text">
                <span>Nonprofit Report</span>
                <img src={icon1} alt="" className="icon1" />
              </div>

              <div className="footer_text icon_text">
                <span>국민권익위원회</span>
                <img src={icon2} alt="" className="icon2" />
              </div>
            </div>

            <div className="footer_column">
              <div className="footer_title">RESOURCE</div>
              <div className="footer_text icon_text">
                <span>로고 가이드라인</span>
                <img src={icon1} alt="" className="icon1" />
              </div>
            </div>
          </div>
        </div>
    )
}

export default Footer
