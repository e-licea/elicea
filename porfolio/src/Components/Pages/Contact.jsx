import React, {useState, useEffect, useRef} from 'react';
import emailjs from 'emailjs-com';
import { init } from 'ityped';
import { Link } from 'react-router-dom';
import * as yup from 'yup'

export default function Contact() {
    
    const [ emailHasSent, setEmailHasSent ] = useState(false);
    const form = useRef()

    let schema = yup.object().shape({
        name: yup.string().min(2).required(),
        email: yup.string().email().required(),
        subject: yup.string().min(2).required(),
        message:yup.string().min(10).required(),
    })

    const [formValid, setFormValid] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    useEffect(() => {
        schema.isValid(formData)
        .then(function(valid){
            setFormValid(true);
        }).catch(function(err){
            setFormData(false);
        })
    }, [onChange])

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

    function onChange(e){
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    
    function onSubmit(e){
        e.preventDefault();
        console.log(formData);
        setEmailHasSent(true)
        emailjs.sendForm('service_38ycq2r', 'template_5kptc2g', form.current, 'user_zmrJEylQGxnauacF4paiD')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
                console.log('FAILED...', error);
            })
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
                <form onSubmit={onSubmit} ref ={form}>
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
                    <button disabled={formValid?'false':'true'} className = 'button-48'><span className="text">Submit</span></button>
                </form>
                </>
            }
            </div>
            </div>
            </>
        )   
    }



