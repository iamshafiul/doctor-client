import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookAppointmentCard.scss';


const BookAppointmentCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = ()=> {
        setIsOpen(true);
    }

    
    const closeModal = ()=> {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 col-sm-12">
            <div className="card p-4 mb-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal}>Book Appointment</button>
                    <AppointmentForm appointmentOn={booking.subject} modalIsOpen={modalIsOpen} closeModal={closeModal} date={date}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookAppointmentCard;