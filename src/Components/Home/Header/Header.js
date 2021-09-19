import React from 'react';
import Navbar from "../../Shared/Navbar/Navbar";
import HeaderMain from "./HeaderMain/HeaderMain";
import './Header.css'
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import ContentHead from "../ContentMid/ContentHead/ContentHead";
import MidDaynamicContent from "../ContentMid/MidDaynamicContent/MidDaynamicContent";
import ContentGetInfo from "../ContentMid/ContentGetInfo/ContentGetInfo";
import Appointment from "../Appointment/Appointment";
import TestimonialHead from "../Testimonial/TestimonialHead/TestimonialHead";
import TestimonialContent from "../Testimonial/TestimonialContent";
import BlogBody from "../Blog/BlogBody";
import OurDoctors from "../OurDoctors/OurDoctors";
import ContactBox from "../Contact/ContactBox/ContactBox";
import FotterData from "../../Shared/Footer/FotterData";
import CopyRight from "../CopyRight/CopyRight";

const Header = () => {
    return (
        <div className="Header-Container container-fluid">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <HeaderInfo></HeaderInfo>
            <ContentHead></ContentHead>
            <MidDaynamicContent></MidDaynamicContent>
            <ContentGetInfo></ContentGetInfo>
            <Appointment></Appointment>
            <TestimonialHead></TestimonialHead>
            <BlogBody></BlogBody>
            <OurDoctors></OurDoctors>
            <ContactBox></ContactBox>
            <FotterData></FotterData>
            <CopyRight></CopyRight>
        </div>
    );
};

export default Header;