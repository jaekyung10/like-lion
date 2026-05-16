import React from 'react'
import Img1 from '../../assets/img/img1.png'
import Img2 from '../../assets/img/img2.png'
import Img3 from '../../assets/img/img3.png'
import Img4 from '../../assets/img/img4.png'
import '../../assets/sass/section1.scss'

const Section1 = () => {
  return (
    <div className="section1_wrap">
        <div className="section1_top">
            <div className="h1">POSSIBILITY</div>
            <img src={Img1} alt="" className="img1" />
        </div>
        <div className="section1_middle">
            <img src={Img2} alt="" className="img2" />
            <div className="h1">TO</div>
            <img src={Img3} alt="" className="img3" />
        </div>
        <div className="section1_bot">
            <div className="h1">REALITY</div>
            <img src={Img4} alt="" className="img4" />
        </div>
    </div>
  )
}

export default Section1
