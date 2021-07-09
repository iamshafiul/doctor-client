import React from 'react';
import './HeaderMain.scss';
import Chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main className="header-main">
            <div className="container">
                <div class="row">
                    <div class="col-md-4 col-sm-12 offset-md-1">
                        <h2>Your New Smile<br/>Start Here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam itaque optio, consequuntur sunt officiis.</p>
                        <button className="mb-5">Get Appointment</button>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <img src={Chair} alt="Chair" className="img-fluid" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;