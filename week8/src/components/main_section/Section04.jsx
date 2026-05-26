import React from 'react'
import '../../assets/sass/section/_mainsection.scss'

const Section04 = () => {
    return (
        <section className="Section04_wrap">
            <h3>
                <em>CORE-VALUES</em><br />
                GROUND-RULES
            </h3>

            <div>
                <div>
                    <h3>Commitment</h3>
                    <p>
                        정직 : Honesty<br />
                        존중 : Respect<br />
                        신뢰 : Trust<br />
                    </p>
                </div>

                <div>
                    <h3>Challenge</h3>
                    <p classname="orange">개척 : Pioneer</p>
                    <p classname="orange">집착 : Obsession</p>
                    <p>탁월 : Excellence</p>
                 </div>

                <div>
                    <h3>Companionship</h3>
                    <p>
                        다양성 : Diversity<br/>
                        배려 : Consideration<br/>
                        소통 : Communication<br/>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Section04