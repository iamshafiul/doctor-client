import React from 'react';
import './Testimonial.scss';
import testimonialOne from '../../../images/testimonial-1.png';
import testimonialTwo from '../../../images/testimonial-2.png';
import testimonialThree from '../../../images/testimonial-3.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';


const TestimonialData = [
    {
        image: testimonialOne,
        title: 'Winson',
        subTitle: 'California',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus repudiandae eligendi nisi, ipsam fugit dolor delectus harum eius quos?',
    },
    {
        image: testimonialTwo,
        title: 'Herry',
        subTitle: 'California',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus repudiandae eligendi nisi, ipsam fugit dolor delectus harum eius quos?',
    },
    {
        image: testimonialThree,
        title: 'Jerry',
        subTitle: 'California',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus repudiandae eligendi nisi, ipsam fugit dolor delectus harum eius quos?',
    },

]


const Testimonial = () => {
    return (
        <section className="testimonial">
            <div className="container">
                <div className="title">
                    <h5>Testimonial</h5>
                    <h3>What's Our Patients<br />Says</h3>
                </div>
                <div className="row">
                    {
                        TestimonialData.map(info => <TestimonialCard info={info}></TestimonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;