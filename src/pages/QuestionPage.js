import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'


import { initializeApp } from "firebase/app";
import 'firebase/storage'
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { NavDropdown } from 'react-bootstrap';



export const QuestionPage = () => {

    // const [sended, sendQuestion] = useState(false)
    const [btnText, setBtnText] = useState('Надіслати питання')

    const [name, nameState] = useState('');
    const [phone, phoneState] = useState('');
    const [question, questionState] = useState('');

    const [isAble, buttonState] = useState(false); 

    const location = useLocation();
    const navigate = useNavigate();
    

    // function filename(str) { 
    //     console.log(str.content.split("\\"));
    // }

    //////////////////storage photo//////////////
    // const firebaseConfig = {
    //     apiKey: "AIzaSyC4lt4wMlmhA1Qe4ObeOdDr-P2_ZmVEnLc",
    //     authDomain: "drfalkovskaya.firebaseapp.com",
    //     databaseURL: "https://drfalkovskaya-default-rtdb.europe-west1.firebasedatabase.app",
    //     projectId: "drfalkovskaya",
    //     storageBucket: "drfalkovskaya.appspot.com",
    //     messagingSenderId: "198640412923",
    //     appId: "1:198640412923:web:d3189ab8e5e8636323685e"
    // };
    // const app = initializeApp(firebaseConfig);
    // const storage = getStorage();
    // const questionsRef = ref(storage, 'questions');
    /////////////////////////

    // const triggerInput = (e) => {
    //     e.preventDefault();
    //     imageRef.current.click();
    // }

    // const nameRef = useRef();
    // const emailRef = useRef();
    // const phoneRef = useRef();
    // const questionRef = useRef();
    // const imageRef = useRef();

    function formHandler(event){
        event.preventDefault();
        
        // const entredName = nameRef.current.value;
        // const entredEmail = emailRef.current.value;
        // const entredPhone = phoneRef.current.value;
        // const entredQuestion = questionRef.current.value;
        // const entredImage = imageRef.current.value;

        const questionData = {
            id: Date.now(),
            name,
            phone,
            question,
            // image: entredImage,
        }

        ///////////////photo
        // const loadRefImage = ref(questionsRef, `/${questionData.image.name}`);
        // const uploadTask = uploadBytesResumable(loadRef, questionData.image);
        // uploadTask.on('state_changed', ()=>{console.log('compl')});

        // uploadBytes(loadRefImage, questionData.image).then((snapshot) => {
        //     console.log('Uploaded a blob or file!');
        //   });

        /////////////////// question
        fetch('https://drfalkovskaya-default-rtdb.europe-west1.firebasedatabase.app/questions.json',
        {
            method: 'POST',
            body: JSON.stringify(questionData),
            headers: {
                'Content-Type':'application/json',
                }
        }).then(()=>{
            buttonState(true);
            setBtnText('Дякую!');
            nameState('');
            phoneState('');
            questionState('');
        }).then(()=>{
            buttonState(false)
            setTimeout(() => {
                setBtnText('Задати щє одне питання');
                if (location.pathname == '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                } else {
                    navigate('/');
                }
            }, 1500)

        })
    }


    return (
        <div className='questionpage container'>
            <form className='questionform' onSubmit={formHandler}>
                <div className="inputfeald">
                    <label htmlFor="name">Ваше і'мя</label>
                    <input type="text" required id='name' onChange={(e)=> nameState(e.target.value)} value={name} />
                </div>
                <div className="inputfeald">
                    <label htmlFor="phone">Контактний номер телефону</label>
                    <input type="phone" required id='phone' onChange={(e)=> phoneState(e.target.value)} value={phone} />
                </div>
                <div className="inputfeald">
                    <label htmlFor="question">Ваше питання</label>
                    <textarea id='question' required  rows='5'  onChange={(e)=> questionState(e.target.value)} value={question} />
                </div>
                {/* <div className="inputfeald loadfeald">
                    <label htmlFor="name"></label>
                    <input type="file" id='name' accept=".png, .jpg, .jpeg" ref={imageRef} />
                </div> */}
                <div className="questionform_buttons">
                    <button className='btn2 notvisiable'>Завантажити фото</button>
                    <Link to='/admin' className="adminlink"></Link>
                    <button className='btn2 btnSubmit' id="sendBtn" disabled={question.length > 20 ? false : true || isAble} onClick={formHandler}>{btnText}</button>
                </div>
                <div className="questionform_telegram">
                <p>Або задайте питаня у Телеграм </p>
                <Link to='/' className='telegramiconlink'></Link>
                </div>
            </form>
        </div>
    )
}

export default QuestionPage