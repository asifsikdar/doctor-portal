import React from 'react';
import HeaderShowData from "./HeaderShowData/HeaderShowData";
import { faClock,faMapMarker,faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import './HeaderInfo.css'

const HeaderInfo = () => {
   const InfoData = [{
       title:'Opening Hour',
       text:'Lorem Ipsum is simply',
       icon:faClock,
       background:'primary',
   },
   {
       title:'Visit our location',
       text:'Brooklyn,NY 10036,United States',
       icon:faMapMarker,
       background:'dark',
   },
   {
       title:'Contact us now',
       text:'+000123456789',
       icon:faPhoneVolume,
       background:'primary',
   }
   ];
    return (
        <section className="d-flex justify-content-center">
           <div className="row w-90">
               {
                   InfoData.map(info => <HeaderShowData info={info}></HeaderShowData>)
               }
           </div>
        </section>
    );
};

export default HeaderInfo;