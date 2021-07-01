import React from 'react';
//import Components
import github from '../../img/icons/github.svg';
import instagram from '../../img/icons/instagram.svg';




export default function Banner() {



    return (
        <>
            <nav className = 'Banner'>
                {/* <img src={logo} alt=""/> */}
                <div className = 'Banner-X'>
                    <div className="socialmedia">
                        <a href="#" className = 'icon'><img src={github} alt="github"/></a>
                        <a href="#" className = 'icon'><img src={instagram} alt="instagram"/></a>  
                                   
                    </div>
                </div>
            </nav>
        </>
    )
}
