import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderShowData = ({info}) => {
    return (
        <div className="col-md-4">
           <div className={`d-flex justify-content-center info-${info.background}`}>
               <div style={{marginRight:"25px"}}>
                   <FontAwesomeIcon className="icon-size" icon={info.icon}/>
               </div>
               <div>
                   <h6>{info.title}</h6>
                   <small>{info.text}</small>
               </div>
           </div>
        </div>
    );
};

export default HeaderShowData;