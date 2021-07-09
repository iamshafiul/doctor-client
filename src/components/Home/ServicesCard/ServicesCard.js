import React from 'react';
import './ServicesCard.scss';

const ServicesCard = ({ info }) => {
    return (
        <div className="col-md-4 col-sm-12">
            <div class="services-card text-center mb-3">
                <img src={info.icon} alt="icon" />
                <div class="card-body">
                    <h5 class="card-title">{info.title}</h5>
                    <p class="card-text">{info.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;