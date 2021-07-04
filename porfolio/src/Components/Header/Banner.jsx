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
                        <a href="https://github.com/e-licea?tab=overview&from=2021-07-01&to=2021-07-04" target="_blank" className = 'icon'><img src={github} alt="github"/></a>
                        
                                   
                    </div>
                </div>
            </nav>
        </>
    )
}
