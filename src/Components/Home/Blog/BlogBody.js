import React from 'react';
import img1 from '../../../images/Ellipse 1.png';
import img2 from '../../../images/Ellipse 2.png';
import img3 from '../../../images/Ellipse 3.png';
import BlogPost from "./BlogPost";
import './BlogPost.css'

const BlogBody = () => {
    const BlogPostData = [{
        image:img1,
       name:'Rashedd Kabir',
       Date:'22 Aug 2021',
       title:'Check at least a doctor in a year for your teeth',
        description:'It is a long established fact that by the readable content of a lot layout.The point'
    },
    {
        image:img2,
        name:'Rashedd Kabir',
        Date:'22 Aug 2021',
        title:'Check at least a doctor in a year for your teeth',
        description:'It is a long established fact that by the readable content of a lot layout.The point'
    },
    {
        image:img3,
        name:'Rashedd Kabir',
        Date:'22 Aug 2021',
        title:'Check at least a doctor in a year for your teeth',
        description:'It is a long established fact that by the readable content of a lot layout.The point'
    }]
    return (
        <section className="section-mid">
            <div className="container">
                <div className="mb-5 head">
                    <h4 style={{color:'#1CC7C1'}}>OUR BLOG</h4>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="row">
                    {
                        BlogPostData.map(info => <BlogPost info={info}></BlogPost>)
                    }
                </div>
            </div>
        </section>


    );
};

export default BlogBody;