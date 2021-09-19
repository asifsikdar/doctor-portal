import React from 'react';
import './ContactBox.css'

const ContactBox = () => {
    return (
        <section className="section-footer container">
            <div className="jhggf">
                <div className="contact-form">
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <h3>Always Connect with us</h3>
                    </div>
                    <div className="contact-items">
                        <form>
                           <div className="container">
                               <div className="col-lg-8 offset-lg-2">
                                   <div className="form-group">
                                       <input type="email" className="form-control" id="exampleFormControlInput1"
                                              placeholder="Email Address*"/><br/><br/>
                                   </div>
                                   <div className="form-group">
                                       <input type="email" className="form-control" id="exampleFormControlInput1"
                                              placeholder="Subject"/><br/><br/>
                                   </div>
                                   <div className="form-group">
                                       <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                                   </div><br/><br/>
                                   <button style={{background:'linear-gradient(to left, #33ccff 0%, #00ffcc 100%)'}} type="submit" className="btn btn-primary btn-lg">SUBMIT</button>
                               </div>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBox;