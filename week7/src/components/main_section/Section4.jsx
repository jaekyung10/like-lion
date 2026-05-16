import React from 'react'
import '../../assets/sass/section4.scss'

const Section4 = () => {
    return (
        <div className="section4_wrap">
            <div className="section4_top">
                <span className="top_white">CORE-VALUES</span>
                <span className="top_black">GROUND-RULES</span>
            </div>

            <div className="section4_bot">
                <div className="circle">
                    <div className="circle_title">Commitment</div>
                    <div className="circle_text commitiment">
                        <span>정직 : Honesty</span>
                        <span>존중 : Respect</span>
                        <span>신뢰 : Trust</span>
                    </div>
                </div>

                <div className="circle">
                    <div className="circle_title">Challenge</div>
                    <div className="circle_text challenge">
                        <span className="orange_text">개척 : Pioneer</span>
                        <span className="orange_text">집착 : Obsession</span>
                        <span className="black_text">탁월 : Excellence</span>
                    </div>
                 </div>

                <div className="circle">
                    <div className="circle_title">Companionship</div>
                    <div className="circle_text companionship">
                        <span>다양성 : Diversity</span>
                        <span>배려 : Consideration</span>
                        <span>소통 : Communication</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4