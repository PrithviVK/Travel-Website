import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these AWESOME destinations</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-9.jpg'
                    text='Explore the hidden waterfalls in the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />{/**calling the component CardItem with props src, text, label, path */}
                    <CardItem
                    src='images/img-2.jpg'
                    text='Travel via the islands of Andaman and Nicobar'
                    label='Luxury'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-8.jpg'
                    text='Explore the Sahara desert on a safari ride'
                    label='Adventure'
                    path='/services'
                    />{/**calling the component CardItem with props src, text, label, path */}
                    <CardItem
                    src='images/img-4.jpg'
                    text='Visit the most unique Lakshwadeep islands with a football field'
                    label='Luxury'
                    path='/services'
                    />
                    <CardItem
                    src='images/img-3.jpg'
                    text='Set sail in the Indian Ocean'
                    label='Mystery'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards