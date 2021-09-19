import React from 'react';
import './Testimonial.css';
import member from '../../../../images/Ellipse 1.png';
import member1 from '../../../../images/Ellipse 2.png';
import member2 from '../../../../images/Ellipse 3.png';
import TestimonialContent from "../TestimonialContent";

const TestimonialHead = () => {
    const CardItem = [{
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
        image:member,
        name:'Winson Herry',
        location:'California',
    },
    {
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
        image:member1,
        name:'Winson Herry',
        location:'California',
    },
    {
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
        image:member2,
        name:'Winson Herry',
        location:'California',
    }]
    return (
        <section className="section-mid">
            <div className="container">
                <div className="mb-5">
                    <h3 style={{color:'#1CC7C1'}}>TESTIMONIAL</h3>
                    <h1>What's Our patients<br/>Says </h1>
                </div>
                <div className="row">
                    {
                        CardItem.map(info => <TestimonialContent info={info}></TestimonialContent>)
                    }
                </div>
            </div>
        </section>
    );
};

export default TestimonialHead;