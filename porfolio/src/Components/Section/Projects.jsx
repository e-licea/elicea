import React from 'react'
import SlideShow from './SlideShow'

export default function Projects() {
    return (
        <div 
        data-aos="fade-in" 
        data-aos-duration="600"
        data-aos-offset="300"     
        id = 'Projects'>
            <h3 className="Main-h3"># Projects</h3>
            <SlideShow/>
        </div>
    )
}
