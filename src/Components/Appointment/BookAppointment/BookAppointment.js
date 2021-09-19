import React from 'react';
import BookingCard from "./BookingCard/BookingCard";

const BookAppointment = ({Date}) => {
    const Data = [{
        id:1,
        subject:'Teeth Orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace:10
    },
        {
            id:2,
            subject:'Cosmic Dentistry',
            visitingHour:'10:00 AM - 11:30 AM',
            totalSpace:10
        },{
            id:3,
            subject:'Teeth Cleaning',
            visitingHour:'5:00 PM - 6:30 PM',
            totalSpace:10
        },
        {
            id:4,
            subject:'Cavity Protection',
            visitingHour:'7:00 AM - 8:30 AM',
            totalSpace:10
        },
        {
            id:5,
            subject:'Teeth Orthodontics',
            visitingHour:'8:00 AM - 9:00 AM',
            totalSpace:10
        },
        {
            id:6,
            subject:'Teeth Cleaning',
            visitingHour:'5:00 PM - 6:30 PM',
            totalSpace:10
        }]
    return (
        <section>
            <h3 style={{color:'#1CC7C1'}} className="text-center mb-5">Available Appointment  {Date.toDateString()}</h3>
            <div className="container">
                <div className="row">
                    {
                        Data.map(booking => <BookingCard booking={booking} Date={Date} key={booking.id}></BookingCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;