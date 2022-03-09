import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { MyCarousel } from '../components/MyCarousel/MyCarousel';

let carouselSourse = [
    {image: require('../img/4.jpg')},
    {image: require('../img/6.jpg')},
    {image: require('../img/5.jpg')},
    {image: require('../img/5.jpg')},
    {image: require('../img/5.jpg')},
    {image: require('../img/5.jpg')},
    {image: require('../img/5.jpg')},
  ]

let startel = 3;
    

export const AboutPage = () => {
    const isCol = useMediaQuery({query: '(max-width: 900px)'});

    return (
        <div className={"aboutpage container"+(isCol?" dir-col" : "")}>
            <div className="about_text">
                <div className="abouttext">Michael Kim, MD is a premier dermatologist in the Los Angeles area with over 25 years of experience.  As an expert in every facet of the skin, Dr. Kim specializes in all aspects of dermatology, including medical and general dermatology, cosmetic procedures, surgical dermatology and laser dermatology.   Dr. Kim provides a wide range of services including complicated surgical skin cancer removals to non-surgical cosmetic rejuvenation procedures.  Whether you have a bothersome rash, hard-to-treat acne, dark spots, psoriasis, eczema, warts, cysts or moles, or a desire to look better, Dr. Kim believes it is important to discuss the various treatment options that are best suited for you and your skin.  At MichaelKim Dermatology, we care about our patients and our goal is to make every visit to our office a pleasant and comfortable experience for all our patients.  
            Dr. Kim is a graduate of University of Chicago Pritzker School of Medicine, Johns Hopkins University and Harvard University.  He is  the recipient of the prestigious National Institutes of Health (NIH) in skin differentiation research from the Howard Hughes Medical Institute and a Diplomate of Aesthetic Medicine.  Dr. Kim served as a clinical instructor at Harvard Medical School in Boston, MA for over 10 years.  We speak Korean and Spanish.  To receive customized treatment recommendations by speaking with Dr. Kim in person, please call us at (213) 357-5090 / (310) 858-9600 to make an appointment.</div>    
                <div className='about_carousel' >
                    <MyCarousel arr={carouselSourse} interval={2000} startelement={startel} />
                </div>
            </div>
            <div className="about_photo">
                <div className="photo"></div>
                <div className="legend">"Dr. Kim combines the most extensive dermatological expertise with in-depth understanding of advanced technologies in skin treatments. He truly has an unfailing commitment to providing the highest levels of patient care."</div>
            </div>
        </div>
    )
}

export default AboutPage