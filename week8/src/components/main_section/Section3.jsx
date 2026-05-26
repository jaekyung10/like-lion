import React from 'react'
import img3_1 from '../../assets/img/img3_1.png'
import img3_2 from '../../assets/img/img3_2.png'
import img3_3 from '../../assets/img/img3_3.png'
import img3_4 from '../../assets/img/img3_4.png'
import img3_5 from '../../assets/img/img3_5.png'
import img3_6 from '../../assets/img/img3_6.jpg'
import img3_7 from '../../assets/img/img3_7.jpg'
import img3_8 from '../../assets/img/img3_8.jpg'
import img3_9 from '../../assets/img/img3_9.png'
import img3_10 from '../../assets/img/img3_10.png'
import '../../assets/sass/section3.scss'

const Section3 = () => {
    const instaImages = [
        img3_1,img3_2,img3_3,img3_4,img3_5,
        img3_6,img3_7,img3_8,img3_9,img3_10,
    ]

    return (
        <section className="section3_wrap">
            <div className="section3_inner">
                <p className="insta_id">@fila_korea</p>
                <div className="insta_grid">
                    {instaImages.map((img, index) => (
                        <div className="insta_item" key={index}>
                            <img src={img} alt={'fila instagram ${index + 1}'} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default Section3
