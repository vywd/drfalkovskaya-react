import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ProductsPage from './ProductsPage';
import QuestionPage from './QuestionPage';
import ContactsPage from './ContactsPage';
import AppointmentPage from './AppointmentPage';

export const MainPage = () => {

    const [isLoaded, setLoaded] = useState(false);

    function handlerload() {
        if (!isLoaded) setLoaded(!isLoaded)
    }

    useEffect(()=>{
        window.addEventListener('load', handlerload);
            return () => window.removeEventListener('load', handlerload);
    })

    return (
        <>
        <div className="mainpage">
            <div className="mainpage_bg"></div>
            <div className="mainpage_content">
                <div  className={!isLoaded ? "mainpage_img" : "mainpage_img mainpage_img_show"}></div>
                <h2 className="content_msg">Задай своє питання лікарю</h2>
                <Link to='/questiones' className="content_btn">Задати питання</Link>
            </div>
        </div>
        <AboutPage />
        <ServicesPage />
        <AppointmentPage />
        <ProductsPage />
        <QuestionPage />
        <ContactsPage />
        </>
    )
}

export default MainPage