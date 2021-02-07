import React from 'react'

export default function Contact() {
    return (
        <div id = 'Contact'>
            <h3 className="Main-h3">Contact</h3>
            <form action="">
                <label>Name :
                    <input type="text"/>
                </label>
                <label htmlFor="">Email :
                    <input type="text"/>
                </label>
                <label htmlFor="">Subject :
                    <input type="text"/>
                </label>
                <label htmlFor="">Message :
                    <input type="text"/>
                </label>
            </form>
        </div>
    )
}
