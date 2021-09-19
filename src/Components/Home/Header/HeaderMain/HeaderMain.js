import React from 'react';
import Chair from '../../../../images/Mask Group 1.png';

const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here </h1>
                <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                    Lorem Ipsum has been the industry's standard dummy<br/>
                    dummy text of the printing and typesetting industry<br/><br/></small>
                <button style={{backgroundColor:'#13D1D3',color:'white',border:'none',padding:'7px'}}>GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={Chair} alt="" srcset="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;