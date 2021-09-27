import React from 'react'
import images from '../../utils/images'

export default function Featured() {
    return (
        <div id = 'Featured'>
            <div>
                <h4>Featured Project</h4>
                <img src={images.rTeamMockup} alt="" />
            </div>
            <div>
                <h4>Currently Working On</h4>
                <img src={images.reactSnkrsMockup} alt="" />
            </div>
        </div>
    )
}
