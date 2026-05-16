import React from 'react'
import Img8 from '../../assets/img/img8.png'
import Img9 from '../../assets/img/img9.png'
import Img10 from '../../assets/img/img10.png'
import Img11 from '../../assets/img/img11.png'
import '../../assets/sass/section5.scss'

const Section5 = () => {
  return (
    <div className="section5_wrap">
        <div className="section5_top">
            <div className="section5_top_title">LIKELION MEDIA</div>
            <div className="section5_top_text">언론 속의 LIKELION</div>
        </div>
        <div className="section5_bot">
            <div className="section5_box">
                <img src={Img8} alt="" className="media_img" />
                <div className="section5_bot_title">
                    <span>“비즈니스 문제 해커톤으로 해</span>
                    <span>결”…멋쟁이사자처럼, 기업 해커톤</span>
                    <span>출시</span>
                </div>
                <div className="section5_bot_text">
                    <span>정보기술(IT) 교육 기업 멋쟁이사자처</span>
                    <span>럼(멋사)은 31일부터 해커톤 참가자들</span>
                    <span>을 통해 기업이 가진 비즈니스 문제를...</span>
                </div>
                <div className="section5_bot_source">머니S | 2023.10.31</div>
            </div>
            <div className="section5_box">
                <img src={Img9} alt="" className="media_img" />
                <div className="section5_bot_title">
                    <span>P2E ‘실타래‘, 편의성 강화해 진입</span>
                    <span>장벽 낮춘다</span>
                </div>
                <div className="section5_bot_text">
                    <span>멋쟁이사자처럼은 메타콩즈뿐 아니라</span>
                    <span>여러 갈래의 대체불가토큰(NFT) 사업</span>
                    <span>을 펼쳤다. 멋쟁이사자처럼 산하 블록...</span>
                </div>
                <div className="section5_bot_source">더별 | 2023.01.27</div>
            </div>
            <div className="section5_box">
                <img src={Img10} alt="" className="media_img" />
                <div className="section5_bot_title">
                    <span>콘크릿, 글로벌 아티스트 톰 삭스와</span>
                    <span>이태원 전역에서 보물찾기 진행</span>
                </div>
                <div className="section5_bot_text">
                    <span>현대카드와 멋쟁이사자처럼의 합작법</span>
                    <span>인 모던라이언이 운영하는 NFT 마켓플</span>
                    <span>레이스 ‘KONKRIT(이하 콘크릿)’이...</span>
                </div>
                <div className="section5_bot_source">경향게임스 | 2023.09.13</div>
            </div>
            <div className="section5_box">
                <img src={Img11} alt="" className="media_img" />
                <div className="section5_bot_title">
                    <span>멋쟁이사자처럼, 아트 NFT·실물</span>
                    <span>연계 ‘쿼드해시‘ 프로젝트 띄운다</span>
                </div>
                <div className="section5_bot_text">
                    <span>멋쟁이사자처럼이 아트NFT와 실물을</span>
                    <span>연계한 대체불가토큰(NFT) 프로젝트</span>
                    <span>쿼드해시를 추진한다.</span>
                </div>
                <div className="section5_bot_source">디지털투데이 | 2023.09.27</div>
            </div>
        </div>
    </div>
  )
}

export default Section5
