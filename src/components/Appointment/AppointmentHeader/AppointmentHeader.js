import './AppointmentHeader.scss';
import Chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handaleDateChange}) => {
    return (
        <main className="appointment-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="title">
                            <h3>Appointment</h3>
                        </div>
                        <Calendar
                            onChange={handaleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-md-6">
                        <img src={Chair} alt="Chair" className="img-fluid" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AppointmentHeader;