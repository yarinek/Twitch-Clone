import React from 'react'
import Channel from './Channel'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel avatar='https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s48-c-k-c0xffffffff-no-rj-mo' name='cleverprogrammer' followers='816k' />
                <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/415d6cc2-c9b2-41c1-aea5-66605000224c-profile_image-150x150.png' name='Simple' followers='30k' />
                <h5>RECOMMENDED CHANNELS</h5>
                <Channel avatar='https://yt3.ggpht.com/ytc/AAUvwni9iW2fYvCkpYFpmQqxnfgDZOPccgo-GYKbmE2f=s88-c-k-c0x00ffffff-no-rj' name='Xayoo' followers='999k' />
                <p className="sidebar__topShowMore">Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i className="fas fa-search"></i>
                    <input type='text' placeholder='Search to add friends' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
