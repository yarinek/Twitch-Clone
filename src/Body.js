import React from 'react'
import './Body.css'
import Profile from './Profile'
import Stream from './Stream'

const Body = () => {
    return (
        <div className='body'>
            <div className="body--left">
                <Stream />
                <Profile />
            </div>
            <div className="body_rightPlaceHolder"></div>
        </div>
    )
}

export default Body
