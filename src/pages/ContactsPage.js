import React from 'react'
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map1 from '../components/Map1'
import Map2 from '../components/Map2'

export const ContactsPage = () => {

    return (
        <div className='contactsPage container'>
            <div className='contactsPage_adresses'>
                <h1>Адреси здійснення консултацій та процедур:</h1>
                
                <h3>Київ</h3>
                <div className='contacts_map1'>
                    <Map1 id='map1' />
                </div>
                
                <h3>Валенсія, Іспанія</h3>
                <div className='contacts_map2'>
                    <Map2 id='map2' />
                </div>
            </div>
            <div className='contactsPage_contacts'>
                <div className='contacts_datas'>
                    <h1>Адреси прийому:</h1>
                    <address>111111111111111111111111111111</address>
                    <address>Carrer del Marqués de Montortal, 9846019 València, Іспанія</address>
                    <h3>Телефон:<a href="tel:+74951234567">+7 (495) 123-45-67</a></h3>
                    <h3>Електронна пошта:<a href="mailto:vlad@htmlbook.ru">vlad@htmlbook.ru</a></h3>
                </div>
                <div className='contacts_social'>
                    <h1>Соціальні мережі:</h1>
                    <h3>Інстаграм: <a href='#'>@1212121212</a></h3>
                </div>
            </div>
        </div>
    )
}

export default ContactsPage
