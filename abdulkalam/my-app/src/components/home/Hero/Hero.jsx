import React from 'react'
import './hero.css'
import Title from '../../common/title/Title.Jsx'
const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <div className="row">
                        <Title subtitle='WELCOM TO ACDAEMIA'  title="Best Online Education" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione distinctio hic voluptatum commodi dolores, provident tenetur nesciunt ipsum nobis magni!</p>
                        <div className="button">
                            <button className='primary-btn'>
                                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                            </button>

                               <button >
                                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            <div className="margin">

            </div>
        </>
    )
}

export default Hero
