import React from 'react';
import './BookingCard.css'
import AppointmentForm from "../../AppointmentForm/AppointmentForm";

const BookingCard = ({booking , Date}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                   <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">BOOK APPOINTMENT</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} AppointmentOn={booking.subject} Date={Date} ></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;