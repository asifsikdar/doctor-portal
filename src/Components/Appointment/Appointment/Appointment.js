import React, {useState} from 'react';
import Navbar from "../../Shared/Navbar/Navbar";
import FotterData from "../../Shared/Footer/FotterData";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppointment/BookAppointment";

const Appointment = () => {
    const [selectDate , setSelectDate] = useState(new Date())
    const HandleDateChange = Date =>{
      setSelectDate(Date);
    }

    return (
        <div>
           <Navbar></Navbar>
            <AppointmentHeader HandleDateChange={HandleDateChange}></AppointmentHeader>
            <BookAppointment Date={selectDate} ></BookAppointment>
            <FotterData></FotterData>
        </div>
    );
};

export default Appointment;