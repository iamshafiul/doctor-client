import React from 'react';
import './TestimonialCard.scss';


const TestimonialCard = ({ info }) => {
    return (
        <div className="col-md-4 col-sm-12">
            <div class="card border-0 shadow bg-body rounded mb-3">
                <div class="card-body">
                    <p class="card-text">{info.description}</p>
                    <div className="content d-flex align-items-center">
                        <div className="img mr-4">
                            <img src={info.image} alt="testimonial" />
                        </div>
                        <div className="text">
                            <h5 class="card-title">{info.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{info.subTitle}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;