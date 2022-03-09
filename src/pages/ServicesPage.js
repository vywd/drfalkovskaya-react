import React from 'react'
import { MyServiceCard } from '../components/MyCard/MyServiceCard'

const ServicesMed = [
    {

        id: 1,
        image: require('../img/1.jpg'),
        title: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus quo consequuntur aperiam aut eligendi odit et doloribus ipsa libero cupiditate possimus rem minus, fugit modi officiis provident, maiores dolor.',

    },{

        id: 2,
        image: require('../img/2.jpg'),
        title: '2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus quo consequuntur aperiam aut eligendi odit et doloribus ipsa libero cupiditate possimus rem minus, fugit modi officiis provident, maiores dolor.',

    },{
        
        id: 3,
        image: require('../img/3.jpg'),
        title: '3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus quo consequuntur aperiam aut eligendi odit et doloribus ipsa libero cupiditate possimus rem minus, fugit modi officiis provident, maiores dolor.',

    }
]
    
const ServicesBeauty =   [
    {
        id: 4,
        image: require('../img/4.jpg'),
        title: '4',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus quo consequuntur aperiam aut eligendi odit et doloribus ipsa libero cupiditate possimus rem minus, fugit modi officiis provident, maiores dolor.',

    },{
        
        id: 5,
        image: require('../img/5.jpg'),
        title: '5',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus quo consequuntur aperiam aut eligendi odit et doloribus ipsa libero cupiditate possimus rem minus, fugit modi officiis provident, maiores dolor.',

    },{
        
        id: 6,
        image: require('../img/6.jpg'),
        title: '6',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus quo consequuntur aperiam aut eligendi odit et doloribus ipsa libero cupiditate possimus rem minus, fugit modi officiis provident, maiores dolor.',

    },{
        
        id: 7,
        image: require('../img/7.jpg'),
        title: '7',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus quo consequuntur aperiam aut eligendi odit et doloribus ipsa libero cupiditate possimus rem minus, fugit modi officiis provident, maiores dolor.',
    }
]

export const ServicesPage = () => {

    return (
        <div className="servicepage container">
            <h1>Медицина</h1>
                <div className='cont_1'>
                    {ServicesMed.map(servis => {
                        return <MyServiceCard key={servis.id} servis={servis}/>
                    })}
                </div>
            <h1>Краса</h1>
                <div className='cont_2'>
                    {ServicesBeauty.map(servis => {
                        return <MyServiceCard key={servis.id} servis={servis}/>
                    })}
                </div>
        </ div>
    )
}

export default ServicesPage