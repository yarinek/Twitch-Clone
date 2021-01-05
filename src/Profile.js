import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'

const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile__topLeft">
                <img src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png' alt='avatar' />
                <div className="profile__topLeftDetails">
                    <h1>CleverProgrammer</h1>
                    <h3>816k followers</h3>
                </div>
            </div>
            <div className="profile__topRight">
                <i className='fas fa-heart graybg'></i>
                <i className='fas fa-bell graybg'></i>
                <i className='fas fa-ellipsis-v'></i>
            </div>
            <div className="profile__menu">
                <h2 className='active'>Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i className='fas fa-arrow-up'></i></h2>
                <h2>Chat</h2>
            </div>

            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItem
                        url={'https://www.youtube.com/embed/gLNIVdtaW3A'}
                        title={'🔴 Let’s Build Twitch Clone for Beginners with React'} />
                    <RecentItem
                        url={'https://www.youtube.com/embed/R7B8sSByZGQ'}
                        title={'🔴 Build Real Time AI Face Detection with Python for Beginners (Tutorial)'} />
                    <RecentItem
                        url={'https://www.youtube.com/embed/UgBTKMUxudw'}
                        title={'🔴 Frontend Developer Guide 2021 (Your Roadmap to a Successful Career)'} />
                    <RecentItem
                        url={'https://www.youtube.com/embed/3Ct6zuHYDtY'}
                        title={'🔴 Its time to master REDUX! (Live PWJ coaching call)'} />
                </div>
                <div className="profile__categories">
                    <h2>CleverProgrammer recently streamed Categories</h2>
                    <img src='https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg' alt='' />
                    <p>League of Legends</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
