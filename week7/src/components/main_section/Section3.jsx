import React from 'react'
import Img5 from '../../assets/img/img5.png'
import Img6 from '../../assets/img/img6.png'
import Img7 from '../../assets/img/img7.png'
import '../../assets/sass/section3.scss'

const Section3 = () => {
  return (
    <div>
      <div className="section3_wrap">
        <div className="section3_top">
            <img src={Img5} alt="" className="img5" />
            <div className="vision1">
                <div className="vision_title">VISION</div>
                <div className="vision_text1">
                  <span>IT 교육 기회를 제공하여</span>
                  <span>꿈꾸던 가능성을 열어준다.</span>
                </div>
                <div className="vision_text2">Open up the possibility of dreaming by providing<br />IT education opportunities.</div>
            </div>
        </div>
        <div className="section3_middle">
            <div className="vision2">
                <div className="vision_title">VISION</div>
                <div className="vision_text1">
                  <span>IT 기술로 IT 교육의 문제를</span>
                  <span>해결한다.</span>
                </div>
                <div className="vision_text2">Solve IT education problems using IT<br />technology.</div>
            </div>
            <img src={Img6} alt="" className="img6" />
        </div>
        <div className="section3_bot">
            <img src={Img7} alt="" className="img7" />
            <div className="vision3">
                <div className="vision_title">VISION</div>
                <div className="vision_text1">
                  <span>지속 성장이 가능한 IT</span>
                  <span>커뮤니티를 구축한다.</span>
                </div>
                <div className="vision_text2">Establish an IT community that can sustain<br />growth.</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section3