import React from 'react'
import item1 from '../../assets/img/item1.svg'
import item2 from '../../assets/img/item2.png'
import item3 from '../../assets/img/item3.png'
import item4 from '../../assets/img/item4.png'
import item5 from '../../assets/img/item5.png'
import item6 from '../../assets/img/item6.png'
import item7 from '../../assets/img/item7.png'
import heart from '../../assets/img/heart.png'
import '../../assets/sass/section1.scss'

const Section1 = () => {
    const products = [
        {
            img: item1,
            tag: '공용 컴포트핏 라이프스타일',
            title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠',
            price: '49,000원',
        },
        {
            img: item2,
            tag: '공용 컴포트핏 라이프스타일',
            title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠',
            price: '49,000원',
        },
        {
            img: item3,
            tag: '공용 컴포트핏 라이프스타일',
            title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠',
            price: '49,000원',
        },
        {
            img: item4,
            tag: '공용 컴포트핏 라이프스타일',
            title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠',
            price: '49,000원',
        },
        {
            img: item5,
            tag: '공용 컴포트핏 라이프스타일',
            title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠',
            price: '49,000원',
        },
        {
            img: item6,
            tag: '공용 컴포트핏 라이프스타일',
            title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠',
            price: '49,000원',
        },
        {
            img: item7,
            tag: '공용 컴포트핏 라이프스타일',
            title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠',
            price: '49,000원',
        },
    ]
    return (
        <section className="section1_wrap">
            <div className="section1_top">
                <h1>지금 많이 찾는 상품</h1>
            
                <div className="tag_menu">
                    <span className="active"># 냉감티셔츠</span>
                    <span># 에샤페</span>
                    <span># 반팔티셔츠</span>
                    <span># 페이토&샌들</span>
                    <span># 인터런</span>
                </div>
        </div>
        <div className="section1_bot">
            <div className="product_track">
                {products.map((product, index) => (
                    <div className="product_card" key={index}>
                        <img src={product.img}
                        alt={product.title}
                        className='product_img'
                        />

                        <div className="product_info">
                            <p className='product_tag'>{product.tag}</p>
                            <h3 className='product_title'>{product.title}</h3>

                            <div className="price_row">
                                <p className='product_price'>{product.price}</p>
                                <img src={heart} className='heart' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Section1
