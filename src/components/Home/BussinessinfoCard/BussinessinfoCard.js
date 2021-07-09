import React from 'react';
import './BussinessinfoCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BussinessinfoCard = ({ info }) => {
    return (
        <div className="col-md-4 col-sm-12">
            <div className={`text-white info-card d-flex align-items-center mb-3 info-${info.background}`}>
                <div className="icon">
                    <FontAwesomeIcon icon={info.icon} />
                </div>
                <div className="content">
                    <h5 className="card-title">{info.title}</h5>
                    <p className="card-text">{info.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BussinessinfoCard;