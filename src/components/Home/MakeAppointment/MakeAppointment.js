import React from 'react';
import './MakeAppointment.scss';
import doctor from '../../../images/doctor.png';

const MakeAppointment = () => {
    return (
        <section className="makeAppointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="img">
                            <img src={doctor} alt="doctor" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 align-self-center">
                        <div className="appoint-content">
                            <div className="title">
                                <h5>Appointment</h5>
                                <h3>Make an appointment<br />today</h3>
                            </div>
                            <p className="text-white mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sint voluptates deserunt facilis fugiat. Dignissimos quibusdam facilis suscipit animi neque!</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;