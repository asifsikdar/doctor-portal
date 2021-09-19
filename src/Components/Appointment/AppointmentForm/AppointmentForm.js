import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentFrom.css'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
const AppointmentForm = ({modalIsOpen , closeModal , AppointmentOn, Date}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-brand mb-5 text-center">{AppointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {Date.toDateString()}</small></p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" {...register("name", { required: true })} placeholder="Your Name"/><br/>
                        {/* errors will return when field validation fails  */}
                        {errors.name && <span style={{color:'red'}}>This field is required</span>}
                    </div><br/>
                    <div className="form-group">
                        <input type="text" {...register("email", { required: true })} placeholder="Your Email"/><br/>
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span style={{color:'red'}}>This field is required</span>}
                    </div><br/>
                    <div className="form-group">
                        <input type="text" {...register("phone", { required: true })} placeholder="Your Phone Number"/><br/>
                        {/* errors will return when field validation fails  */}
                        {errors.phone && <span style={{color:'red'}}>This field is required</span>}
                    </div><br/>
                    <div className="form-group">
                        <div className="col-4">
                            <input type="date" {...register("date", { required: true })} placeholder="Select Date"/><br/>
                            {/* errors will return when field validation fails  */}
                            {errors.date && <span style={{color:'red'}}>This field is required</span>}
                        </div>
                    </div><br/>
                    <div className="form-group row">
                       <div className="col-4">
                           <select className="form-group" name="gender">
                              <option disabled={true} value="gender"></option>
                               <option value="Male">Male</option>
                               <option value="Female">Female</option>
                               <option value="Other">Other</option>
                           </select>
                           {errors.gender && <span>This field is required</span>}
                       </div><br/>
                    </div><br/>
                    <input className="button-b" type="submit" />
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;