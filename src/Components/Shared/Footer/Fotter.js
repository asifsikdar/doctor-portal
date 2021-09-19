import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Fotter = ({infodata}) => {
    return (
          <div className="col-md-3">
              <div style={{color:'#1CC7C1', marginBottom:'40px'}}>
                  <h4>{infodata.infooo}</h4>
              </div>
              <div className="opacity-75">
                  <h6>{infodata.name}</h6>
                  <h6>{infodata.name1}</h6>
                  <h6>{infodata.name2}</h6>
                  <h6>{infodata.name3}</h6>
                  <h6>{infodata.name4}</h6>
                  <h6>{infodata.other}</h6>
                  <h6>{infodata.other}</h6>
                  <FontAwesomeIcon className="icon-list" icon={infodata.icon}/>
                  <FontAwesomeIcon className="icon-list" icon={infodata.icon1}/>
                  <FontAwesomeIcon className="icon-list" icon={infodata.icon2}/>
                  <h4 className="mt-5 mb-5">{infodata.call}</h4>
                  <button className="button">{infodata.Number}</button>
              </div>

          </div>
    );
};

export default Fotter;