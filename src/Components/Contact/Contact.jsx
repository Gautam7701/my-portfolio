import React, { useRef, useState } from 'react'
import "./Contact.css"
import emailjs from"@emailjs/browser"


const Contact = () => {
  const formRef = useRef();
  const [loading, setloading]=useState(false);
  const [form, setform] = useState({
    name:"",
    email:"",
    message:""
  })

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setform({ ...form, [name]: value });
  };

  //service_qsox6ro
  const handleSubmit=async(e)=>{
    e.preventDefault();

    setloading(true);

    try {
     await  emailjs.send("service_qsox6ro","template_s408fas", {
        from_name:form.name,
        to_name:"Gautam",
        from_email:form.email,
        to_email:"gautamgupta2606@gmail.com",
        message:form.message
      },"0TGK4fXrS5DoUOthF")

      setloading(false);
      setMessageSent(true);
      // alert("Your message has been sent!")

      setform({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setloading(false);
      console.log(error);
      alert("Something went wrong")
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default Enter key behavior
      handleSubmit(e); // Submit the form
    }
  };

  return (
    <section className='sm:px-10 px-5 my-20' id='contact'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
      <div className="max-w-3xl w-full relative z-10 sm:px-10 px-5 mt-4">
      <h3 className='sm:text-4xl text-3xl font-semibold text-gray_gradient'>Let's talk</h3>
      <p className='text-lg text-white-600 mt-3'>
      Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
      life, I’m here to help.
      </p>
      <form ref={formRef} onSubmit={handleSubmit} onKeyDown={handleKeyDown} className='mt-12 flex flex-col space-y-7'>
        <label className='space-y-3'>
          <span className='text-lg text-white-600'>Full Name</span>
          <input type="text" name="name" value={form.name} onChange={handleChange} required="required" placeholder='Enter your name' className='w-full px-5 py-2 min-h-14 rounded-lg placeholder:text-white-600 text-lg text-black shadow-black-200 shadow-2xl focus:outline-none'/>
        </label>
        <label className='space-y-3'>
          <span className='text-lg text-white-600'>Email</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} required="required" placeholder='Enter your email address' className='w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-600 text-lg text-black shadow-black-200 shadow-2xl focus:outline-none'/>
        </label>
        <label className='space-y-3'>
          <span className='text-lg text-white-600'>Your Message</span>
          <textarea name="message" value={form.message} onChange={handleChange} required="required" rows={4} placeholder='Hi, I am interested in...' className='w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-black shadow-black-200 shadow-2xl focus:outline-none'/>
        </label>
        <button className='bg-black px-5 py-2 min-h-8 hover:scale-105 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3' type="submit" disabled={loading}>
          {loading? "Sending...": "Send Message"}
          <img src="/arrow-up.png" alt="" className='w-2.5 h-2.5 object-contain invert brightness-0'/>
        </button>

      </form>
      {messageSent && (
      <div className="text-green-500 mt-4">
        <p>Your message has been sent successfully!</p>
      </div>
    )}
      </div>
      </div>
    </section>
  )
}

export default Contact
