import React from 'react';
import './AppointmentsByDate.scss';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h2 className="text-brand text-center mb-4">Appointments</h2>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date !</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;