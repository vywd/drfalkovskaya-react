import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { QuestionCard } from '../components/QuestionCard';

export const AdminPage = () => {

    const [login, loginState] = useState('');
    const [password, passwordState] = useState('');
    const navigate = useNavigate();
    const [questionesDatabase, questionesState] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    

    function toMain(event) {
        event.preventDefault();
        navigate('/');
    }

    async function serverRequest(event) {
        event.preventDefault();
        await authWithloginAndPassword(login, password);
        console.log('questionesDatabase2',questionesDatabase);
    }

    function authWithloginAndPassword(login, password) {
        setIsLoading(true);
        const api = `AIzaSyC4lt4wMlmhA1Qe4ObeOdDr-P2_ZmVEnLc`;
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api}`, {
            method: 'POST',
            body: JSON.stringify({
                email: login, 
                password: password, 
                returnSecureToken: true,
            }), 
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => data.idToken)
            .then(token => {
                return fetch(`https://drfalkovskaya-default-rtdb.europe-west1.firebasedatabase.app/questions.json?auth=${token}`)
            })
            .then(quest => quest.json())
            .then(q=>{
                console.log('q',q);
                console.log('objkey',Object.keys(q))
                let arr = [];
                questionesState(arr);
                Object.keys(q).map(qkey=>questionesState(arr => [...arr, q[qkey]]))
                setIsLoading(false);
                setIsLoaded(true);
            })
            console.log('questionesDatabase1',questionesDatabase)
    }

    return (
        <div className='adminPage container' style={{minHeight: 'calc(100vh - 200px)'}}>
            <div className='adminFeald'>
                <form className='questionform'>
                    <div className="inputfeald">
                        <label htmlFor="login">Login</label>
                        <input type="email" required id='login' onChange={(e)=> loginState(e.target.value)} value={login}/>
                    </div>
                    <div className="inputfeald">
                        <label htmlFor="password">password</label>
                        <input type="password" required id='password' onChange={(e)=> passwordState(e.target.value)} value={password}/>
                    </div>
                    <div className="inputfealdBTN" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <button className='btn2' onClick={toMain}>To Main Page</button>
                        <button className='btn2' onClick={serverRequest}>See Questions</button>
                    </div>
                </form>
            </div>
            <div className='rendered'>

                {isLoading && !isLoaded && <h1>Loading...</h1>}

                {  questionesDatabase.length
                ? <h1>Questiones:</h1>
                : !isLoading ? <h1>No questiones yet</h1> : <></>
                }

                {questionesDatabase.map(ques=>{
                    return <QuestionCard key={ques.id} ques={ques}  />
                })}  
                


            </div>
        </div>
    )
}
