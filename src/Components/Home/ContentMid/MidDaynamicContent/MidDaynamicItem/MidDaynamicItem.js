import React from 'react';
import './MidDaynamicItem.css';

const MidDaynamicItem = ({infoo}) => {
    return (
        <div className="col-md-3 offset-md-1 item-align">
            <div className="icon-item">
                <img src={infoo.icon}/>
            </div>
            <h5>{infoo.name}</h5>
            <h6>{infoo.description}</h6>
        </div>
    );
};

export default MidDaynamicItem;