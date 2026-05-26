import React from 'react'
import img2_1 from '../../assets/img/img2_1.png'
import img2_2 from '../../assets/img/img2_2.png'
import '../../assets/sass/section2.scss'

const Section2 = () => {
  return (
    <section className="section2_wrap">
        <h1>기획전</h1>

        <div className="event_wrap">
            <div className="event_card">
                <img src={img2_1} alt="FILA CUSTOM STUDIO" />
                <h3>FILA CUSTOM STUDIO</h3>
                <button>자세히 보기</button>
            </div>

            <div className="event_card">
                <img src={img2_2} alt="Pertex Life" />
                <h3>Pertex Life</h3>
                <button>자세히 보기</button>
            </div>
        </div>
    </section>
  )
}

export default Section2
