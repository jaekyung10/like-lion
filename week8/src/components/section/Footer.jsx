import React from 'react'
import logo2 from '../../assets/img/likelion_logo.svg'
import instar from '../../assets/img/instar.svg'
import youtube from '../../assets/img/youtube.svg'
import branch from '../../assets/img/branch.svg'
import download from '../../assets/img/download.svg'
import share from '../../assets/img/share.svg'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="left">
        <img src={logo2} />

        <p>
          (주)멋쟁이사자처럼 | 대표이사 나성영<br/>
          서울특별시 종로구 종로3길 17 D타워, 16-17층<br/>
          사업자 번호 : 264-88-01106<br/>
          통신판매업 신고번호 : 2022-서울종로-1534<br/>
          문의처 contact@likelion.net
        </p>

        <div>
          <div>
            <img src={instar} alt="" className="instar" />
          </div>
          <div>
            <img src={youtube} alt="" className="youtube" />
          </div>
          <div>
            <img src={branch} alt="" className="branch" />
          </div>
        </div>
      </div>
      <div className="right">
        <div>
          <h3>FAMILY BRAND</h3>
          <p>TECHIT</p>
          <p>SYLTARE</p>
          <p>MODERN LION</p>
          <p>QUADHASH</p>
        </div>

        <div>
          <h3>POLICY</h3>
          <p>이용약관</p>
          <p>개인정보처리방침</p>

          <div>
            <p>Nonprofit Report</p>
            <img src={download}/>
          </div>

          <div>
            <p>국민권익위원회</p>
            <img src={share} />
          </div>
        </div>

        <div>
          <h3>RESOURCE</h3>
          
          <div>
            <p>로고 가이드라인</p>
            <img src={download} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
