import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

export const NavMenu = () => {

    const isBurger = useMediaQuery({query: '(min-width: 1224px)'});

    const [menuActive, setMenuActive] = useState(false);

    function onchangestate(){
        setMenuActive(!menuActive);
        document.body.style.overflow='';
    }

    return (
        <>
        <nav>
            <ul className=''>
                <li className={'burger burgBTN' + (isBurger ? ' notvisiable' : ' visiable' )} onClick={()=>{setMenuActive(true); document.body.style.overflow='hidden'}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>
                <li className={'notburger' + (isBurger ? ' visiable' : ' notvisiable' )}><Link to='/about'>Про Лікаря</Link></li>
                <li className={'notburger' + (isBurger ? ' visiable' : ' notvisiable' )}><Link to='/services'>Послуги</Link></li>
                <li className={'notburger' + (isBurger ? ' visiable' : ' notvisiable' )}><Link to='/appointment'>Запис</Link></li>
                <li className={'notburger' + (isBurger ? ' visiable' : ' notvisiable' )}><Link to='/products'>Продукти</Link></li>
                <li className={'notburger' + (isBurger ? ' visiable' : ' notvisiable' )}><Link to='/questiones'>Задати питання</Link></li>
                <li className={'notburger' + (isBurger ? ' visiable' : ' notvisiable' )}><Link to='/contacts'>Контакти</Link></li>
            </ul>
           
            <div className={''+(menuActive ? "overlay" : "overlay hide")} onClick={onchangestate} ></div>
            <menu className={''+(menuActive ? "overlaymenu" : "overlaymenu hide")} onClick={onchangestate}>
                <li className=''><Link to='/about'>Про Лікаря</Link></li>
                <li className=''><Link to='/services'>Послуги</Link></li>
                <li className=''><Link to='/appointment'>Запис</Link></li>
                <li className=''><Link to='/products'>Продукти</Link></li>
                <li className=''><Link to='/questiones'>Задати питання</Link></li>
                <li className=''><Link to='/contacts'>Контакти</Link></li>
            </menu>
        </nav>
        </>
    )
}

export default NavMenu;