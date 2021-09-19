import React from 'react';
import Chair from "../../../images/Mask Group 1.png";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({HandleDateChange}) => {
    return (
        <main style={{height: "600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Appointment </h1>
                <Calendar
                    onChange={HandleDateChange}
                    value={new Date()}
                />

            </div>
            <div className="col-md-6">
                <img src={Chair} alt="" srcSet="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default AppointmentHeader;