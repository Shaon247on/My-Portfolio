
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import Title from "../../Shared/Title";

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(form.current)

        emailjs
            .sendForm('service_zs6uk7j', 'template_clqoy3o', form.current, {
                publicKey: 'VSlNt2JVRmQL04OMV',
            })
            .then(
                () => {

                    Swal.fire({
                        title: "Success",
                        text: "Your Message Have been send",
                        icon: "success"
                    });
                    e.target.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <div className="my-14">
                <Title
                    title='Contact'></Title>
            </div>
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold font-playfair text-gradient dark:dark-text-gradient ">Get in touch</h1>
                    <p className="pt-2 pb-4 text-black dark:text-white">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#7f4ae9]">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span className='text-black dark:text-white'>karamtola, Pubail, Gazipur.</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#7f4ae9]">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span className='text-black dark:text-white'>01400-608970</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#7f4ae9]">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span className='text-black dark:text-white'>aminul007.ais@gmail.com</span>
                        </p>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-3 md:py-0 md:px-6">
                    <label className="text-black dark:text-white text-base font-medium">Name</label>
                    <input placeholder="Your Name" className="block w-full px-3 py-2 border-b-[#7f4ae9] border-b placeholder-[#7f4ae9] focus:placeholder-transparent focus:border-b-[#7f4ae9] duration-150 focus:border-b-4 hover:border-b-[#7f4ae9] hover:border-b-4 outline-none bg-transparent" type="text" name="user_name" />

                    <label className="text-black dark:text-white text-base font-medium">Email</label>
                    <input placeholder="Your Email" className="block w-full px-3 py-2 border-b-[#7f4ae9] border-b placeholder-[#7f4ae9] focus:placeholder-transparent focus:border-b-[#7f4ae9] duration-150 focus:border-b-4 hover:border-b-[#7f4ae9] hover:border-b-4 outline-none bg-transparent" type="email" name="user_email" />

                    <label className="text-black dark:text-white text-base font-medium">Subject</label>
                    <input placeholder="Subject" className="block w-full px-3 py-2 border-b-[#7f4ae9] border-b placeholder-[#7f4ae9] focus:placeholder-transparent focus:border-b-[#7f4ae9] duration-150 focus:border-b-4 hover:border-b-[#7f4ae9] hover:border-b-4 outline-none bg-transparent" type="text" name="subject" />

                    <label className="text-black dark:text-white text-base font-medium">Message</label>
                    <textarea placeholder="Your Message" name="message" className="block w-full px-3 pb-9 border-b-[#7f4ae9] border-b placeholder-[#7f4ae9] focus:placeholder-transparent focus:border-b-[#7f4ae9] duration-150 focus:border-b-4 hover:border-b-[#7f4ae9] hover:border-b-4 outline-none bg-transparent" />

                    <input className="px-7 py-3 animation-hover rounded-xl font-semibold text-white" type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
};

export default Contact;