import React from 'react';
import { Link } from 'react-router-dom';
// import {BsInstagram} from 'react-icons/bs';

export const LogoHeader = () => {

    return (
        <header className="LogoHeader">
            <Link to='/' className='logo'></Link>
            {/* <div className='logo'></div> */}
            <div className='logotext_all'>
                <h1 className='logotext' >Фальковська Ангеліна Володимирівна</h1>
                <h1 className='logotext'>Лікар дитячий дерматовенеролог, Дерматолог, Косметолог</h1>
            </div>
            <Link to='/' className='instaiconlink'></Link>
            <Link to='/' className='telegramiconlink'></Link>
            {/* <BsInstagram size={50} stroke="#6c757d" fill="#6c757d" className='instaicon' /> */}
            
        </header>
    )
}


export default LogoHeader