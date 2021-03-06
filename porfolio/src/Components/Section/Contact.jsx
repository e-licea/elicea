import React, {useState, useEffect} from 'react';
import bit from '../../img/genImg/64bit.gif';


export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    function onChange(e){
        setFormData({...formData,[e.target.name]:e.target.value});
       
    }
    
    function onSubmit(e){
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div id = 'Contact'>
            <div>
                <h3 className="Main-h3">Contact</h3>
                <form onSubmit = {onSubmit} >
                    <label>Name :
                        <input type="text"
                            onChange = {onChange}
                            name = "name"
                            value = {formData.name}
                            placeholder ='Enter your name'
                        />
                    </label>
                    <label htmlFor="">Email :
                        <input type="text"
                        onChange = {onChange}
                        name = 'email'
                        value = {formData.email}
                        placeholder ='youemail@email.com'
                        />
                    </label>
                    <label htmlFor="">Subject :
                        <input type="text"
                        onChange = {onChange}
                        name = 'subject'
                        value = {formData.subject}
                        placeholder = 'Re: Subject'
                        />
                    </label>
                    <label htmlFor="">Message :
                        <input type="text"
                        onChange = {onChange}
                        name = 'message'
                        value = {formData.message}
                        placeholder = 'Your message here'
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
            <img src={bit} alt=""/>

        </div>
    )
}