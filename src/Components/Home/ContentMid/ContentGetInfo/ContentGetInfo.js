import React from 'react';
import Dental from '../../../../images/Mask Group 3.png';
import './ContentGetInfo.css';

const ContentGetInfo = () => {
    return (
        <div className=" row resize-items offset-md-1">
            <div className="col-md-5">
                <img className="img-fluid" src={Dental} alt="" srcSet=""/>
            </div>
            <div className="col-md-6 text-align">
                <h1>Exceptional Dental<br/>
                    Care,on Your Terms</h1>
                <p>Contrary to popular belief, Lorem Ipsum<br/> is
                    piece of classical Latin literature from
                    45 BC,<br/> making it over 2000 years old.<br/>
                    Contrary to popular belief, Lorem Ipsum<br/> is
                    piece of classical Latin literature from
                    45 BC,<br/> making it over 2000 years old.<br/>
                    Contrary to popular belief, Lorem Ipsum<br/> is
                    piece of classical Latin literature from
                    45 BC,<br/> making it over 2000 years old.<br/>
                    <button className="btn btn-primary button-style" style={{backgroundColor:'#15D1C4' , border:'none'}}>Learn More</button>
                </p>
            </div>
        </div>
    );
};

export default ContentGetInfo;