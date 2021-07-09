import React from 'react';
import './DoctorsCard.scss';

const DoctorsCard = ({ info }) => {
    return (
        <div className="col-md-4 col-sm-12">
            <div class="doctor-card mb-3">
                <img src={`data:image/png;base64,${info.image.img}`}alt="doctor" />
                <div class="card-body">
                    <h5 class="card-title">{info.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{info.number}</h6>
                </div>
            </div>
        </div>
    );
};

export default DoctorsCard;