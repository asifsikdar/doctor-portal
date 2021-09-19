import React from 'react';
import './BlogPost.css';
const BlogPost = ({info}) => {
    return (
        <div className="col-md-4">
            <div className="card shadow hover-item">
                <div className="card-body mt-3">
                    <div className="text-up">
                        <img className="img-fluid" src={info.image} alt="" srcSet=""/>
                        <div className="texts">
                            <h5>{info.name}</h5>
                            <h6>{info.Date}</h6>
                        </div>
                    </div>
                    <div className="des-size">
                        <h5>{info.title}</h5>
                        <h6>{info.description}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;