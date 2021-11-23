import React, {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';
import { init } from 'ityped';
import { Link } from 'react-router-dom';

export default function Contact() {
    
    const [ emailHasSent, setEmailHasSent ] = useState(false);

    useEffect(() => {
        const header = document.querySelector('#ContactHeader')
        init(header, {
            cursorChar: '_',
            strings: [
                'Contact'
            ],
            loop: false
        })

    }, [])

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
        setEmailHasSent(true)
        emailjs.sendForm('service_2xlw3um', 'template_5kptc2g', e.target, 'user_zmrJEylQGxnauacF4paiD')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
                console.log('FAILED...', error);
            });

    }

    return (
        <>
            <span id = 'ContactHeader' className="Main-h3"></span>

            <div 
                data-aos="fade-up" 
                data-aos-duration="600"
                data-aos-offset="400" 
                id = 'Contact'>
            <div>

           {
               emailHasSent?
                <>
               <p>Your message has been sent.</p>
               <img src="https://drive.google.com/uc?id=1BjFn_Ip0HjCSbYyKf3aKCs4OGa-azoRP" alt="" />
                </>
               :
                <>
                <div className = 'contact-ad'>
                    <p>Thank you for visiting! Come back and check back soon for more updates!</p>
                </div>
                <form >
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
                        placeholder ='youremail@email.com'
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
                        <textarea type="text"
                        onChange = {onChange}
                        name = 'message'
                        value = {formData.message}
                        placeholder = 'Your message here'
                        />
                    </label>
                    <Link onClick = {onSubmit} to ='/'  className = 'button-48'><span class="text">Submit</span></Link>
                </form>
                </>
            }
            </div>
            </div>
            </>
        )   
    }



