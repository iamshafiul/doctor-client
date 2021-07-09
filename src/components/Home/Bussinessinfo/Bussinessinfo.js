import React from 'react';
import './Bussinessinfo.scss';
import { faClock, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import BussinessinfoCard from '../BussinessinfoCard/BussinessinfoCard';

const BussinessInfosData = [
    {
        icon: faClock,
        title: 'Opening Hours',
        description: 'ThLorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, hic!',
        background: 'primary',
    },
    {
        icon: faMapMarkerAlt,
        title: 'Visit our location',
        description: 'Brooklyn, NY 3445 USA',
        background: 'dark',
    },
    {
        icon: faPhoneVolume,
        title: 'Contact us now',
        description: '+46292894323',
        background: 'primary',
    },

]

const Bussinessinfo = () => {
    return (
        <section className="bussinessinfo">
            <div className="container">
                <div className="row">
                    {
                        BussinessInfosData.map(info => <BussinessinfoCard info={info}></BussinessinfoCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Bussinessinfo;