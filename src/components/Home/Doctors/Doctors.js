import React, { useEffect } from 'react';
import './Doctors.scss';
import DoctorsCard from '../DoctorsCard/DoctorsCard';
import { useState } from 'react';


const Doctors = () => {
    
        const [allDoctors, setAllDoctors] = useState([]);

        useEffect(() => {
            fetch("http://localhost:5000/doctor")
                .then((res) => res.json())
                .then((data) => {
                    setAllDoctors(data);
                });
        }, []);
    
    return (
        <section className="doctors text-center">
            <div className="container">
                <div className="title">
                    <h5>Our Services</h5>
                </div>
                <div className="row">
                    {
                        allDoctors.map(info => <DoctorsCard info={info}></DoctorsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;