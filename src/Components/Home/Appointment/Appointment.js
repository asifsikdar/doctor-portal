import React from 'react';
import Doctor from '../../../images/5790-removebg.png';
import './Appointment.css'

const Appointment = () => {
    return (
        <section className="section-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 img-size">
                        <img className="img-fluid" src={Doctor} alt="" srcSet=""/>
                    </div>
                    <div className="col-md-6 texts-size">
                        <h3>Appointment</h3>
                        <h1>Make an appointment <br/>Today</h1>
                        <small>It is a long established fact that a reader will be distractedby the readable<br/>content
                            of a page when looking at it's<br/><br/><br/></small>
                        <button style={{backgroundColor:'#1CC7C1', border:'none',borderRadius:'unset', padding:'7px 25px'}} className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;