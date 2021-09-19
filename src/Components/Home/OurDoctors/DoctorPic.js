import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DoctorPic = ({info}) => {
    return (
        <div className="col-md-4 items">
            <img className="img-fluid" src={info.image} alt="" srcSet=""/>
           <div className="content-container">
               <div className="font-size">
                   <h5>{info.name}</h5>
               </div>
               <div className="rel-content">
                   <small>{info.phone}</small>
               </div>
               <div className="abs-content">
                   <FontAwesomeIcon style={{color:'#1CC7C1'}} icon={info.icon}/>
               </div>
           </div>
        </div>


    );
};

export default DoctorPic;