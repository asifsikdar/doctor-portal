import React from 'react';
import img1 from '../../../images/5790-removebg.png';
import DoctorPic from "./DoctorPic";
import './OurDoctors.css';
import {faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const OurDoctors = () => {
   const Image = [{
       image:img1,
       name:'Dr Caudi',
       phone:'+61 457 364 30',
       icon:faPhoneAlt,
   },
   {
       image:img1,
       name:'Dr Caudi',
       phone:'+61 457 364 30',
       icon:faPhoneAlt,
   },
   {
       image:img1,
       name:'Dr Caudi',
       phone:'+61 457 364 30',
       icon:faPhoneAlt,

   }]
    return (
        <section>
            <div>
                <h3 className="text-center text-sizee">Our Doctor</h3>
            </div>
            <div className="container">
               <div className="row">
                   {
                       Image.map(info=> <DoctorPic info={info}></DoctorPic>)
                   }
               </div>
            </div>
        </section>
    );
};

export default OurDoctors;