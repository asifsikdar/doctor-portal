import React from 'react';
import TOne from '../../../../images/001-dental.png';
import TTwo from '../../../../images/tooth.png';
import TThree from '../../../../images/tooth (1).png';
import MidDaynamicItem from "./MidDaynamicItem/MidDaynamicItem";

const MidDaynamicContent = () => {
    const DaynamicPic = [{
        icon:TOne,
        name:'Fluoride Treatment',
        description:'Lorem Ipsum is simply dummy t.\n' +
            'Lorem Ipsum has been the industry\n' +
            'dummy text of the printing and \n'
    },
        {
        icon:TTwo,
        name:'Fluoride Treatment',
        description:'Lorem Ipsum is simply dummy t.\n' +
            'Lorem Ipsum has been the industry\n' +
            'dummy text of the printing and \n'
        },
        {
        icon:TThree,
        name:'Fluoride Treatment',
        description:'Lorem Ipsum is simply dummy t.\n' +
            'Lorem Ipsum has been the industry\n' +
            'dummy text of the printing and \n'
        }]
    return (
        <div className="row">
            {
                DaynamicPic.map(infoo => <MidDaynamicItem infoo={infoo}></MidDaynamicItem>)
            }
        </div>
    );
};

export default MidDaynamicContent;