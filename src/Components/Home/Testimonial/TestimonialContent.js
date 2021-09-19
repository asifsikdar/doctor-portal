import React from 'react';
import './TestimonialHead/Testimonial.css';

const TestimonialContent = ({info}) => {
    return (
        <div className="col-md-4">
            <div className="card shadow">
                <div className="card-body">
                    <h5 style={{opacity:'0.7'}} className="card-title text-size">{info.description}</h5>
                    <div className="content">
                        <img className="img-fluid" src={info.image} alt="" srcSet=""/>
                        <div className="text-item">
                            <h5>{info.name}</h5>
                            <h6>{info.location}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialContent;