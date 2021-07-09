import React from 'react';
import './Services.scss';
import dental from '../../../images/dental.png';
import cavity from '../../../images/catity.png';
import tooth from '../../../images/tooth.png';
import ServicesCard from '../ServicesCard/ServicesCard';

const ServicesData = [
    {
        icon: dental,
        title: 'Fluoride Tretment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus repudiandae eligendi nisi, ipsam fugit dolor delectus harum eius quos?',
    },
    {
        icon: cavity,
        title: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus repudiandae eligendi nisi, ipsam fugit dolor delectus harum eius quos?',
    },
    {
        icon: tooth,
        title: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus repudiandae eligendi nisi, ipsam fugit dolor delectus harum eius quos?',
    },

]
const Services = () => {
    return (
        <section className="services">
            <div className="title">
                <h5>Our Services</h5>
                <h3>Services We Provide</h3>
            </div>
            <div className="container">
                <div className="row">
                    {
                        ServicesData.map(info => <ServicesCard info={info}></ServicesCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;