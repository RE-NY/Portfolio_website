"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser'
import { Toaster, toast} from 'sonner';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const sendEmail = (params) => {

    const toastId = toast.loading("Sending your message. Please wait...");

    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
      {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate: {
            throttle: 5000, // you can't set more than 1 email per 5000ms(i.e. 5 secs)

        }
      })
      .then(
        () => {
          toast.success("I have recieved your message, I will get back to you soon!", {
            id: toastId
          });
        },
        (error) => {
          toast.error("There was an error sending your message, please try again later.", {
            id: toastId
          });
        },
      );
  };


  const onSubmit = data =>{
    const templateParams = {
        to_name: "Rehan",
        from_name: data.name,
        reply_to: data.email,
        message: data.message
    };
    sendEmail(templateParams);
  };
  console.log(errors);
  
  return (
    <>
        <Toaster />
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>

      <input type="text" placeholder="Name" {...register("name", {required: "This field is required", minLength:{value: 3, message: "Name should be atleast 3 characters long."}})} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'/>

      {
        errors.text && <span className='inline-block self-start text-accent'>{errors.text.message}</span>
      }

      <input type="email" placeholder="Email" {...register("Email", {required: "This field is required", pattern: /^\S+@\S+$/i})} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'/>

      {
        errors.email && <span className='inline-block self-start text-accent'>{errors.email.message}</span>
      }
      
      <textarea placeholder='Message' {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 512,
              message: "Message should be less than 512 characters",
            },
            minLength: {
              value: 25,
              message: "Message should be more than 25 characters",
            },
          })} 
      className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'/>

      {
        errors.message && <span className='inline-block self-start text-accent'>{errors.message.message}</span>
      }

      <input value= "Send Your Message ᯓ➤" className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid 
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize custom-bg" type="submit" />
    </form>
    </>
  );
}