import React from 'react';
import { faFacebook , faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Fotter from "./Fotter";
// import Fotter from "./Fotter";

const FotterData = () => {
    const Data = [{
        name:'Emergency Dental Care',
        name1:'Check Up',
        name2:'Treatment of Personal Diseases',
        name3:'Tooth Extraction',
        name4:'Check Up'
    },
        {
            infooo:'Service',
            name:'Emergency Dental Care',
            name1:'Check Up',
            name2:'Treatment of Personal Diseases',
            name3:'Tooth Extraction',
            name4:'Check Up',
            other:'Check Up'
        },
        {
            infooo:'Service',
            name:'Emergency Dental Care',
            name1:'Check Up',
            name2:'Treatment of Personal Diseases',
            name3:'Tooth Extraction',
            name4:'Check Up',
            other:'Check Up'
        },
        {
            infooo:'Our Address',
            name:'New york - 101010 Hudson Yards',
            icon:faFacebook,
            icon1: faGooglePlus,
            icon2: faTwitter,
            call:'Call Now',
            Number:'78583435'
        }]
    return (
        <section className="container">
           <div className="row mt-5">
               {
                   Data.map(infodata => <Fotter infodata={infodata}></Fotter>)
               }
           </div>
        </section>
    );
};

export default FotterData;