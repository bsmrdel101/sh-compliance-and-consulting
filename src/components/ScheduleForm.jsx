import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init("user_DvzluUOonFH13wInZ1rTp");

export default function ScheduleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailSent(true);
    let emailParams = {
      name: name,
      email: email,
      phone: phone,
      description: description
    }
    emailjs.send('service_evx9vw1', 'template_fv5c4ee', emailParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
    setName('');
    setEmail('');
    setPhone('');
    setDescription('');
  }

  return (
    <center>
      <form onSubmit={sendEmail} className='form-container'>
        <h3 className='form-title'>Schedule a Consultation</h3>
        <input 
          className='form-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
        />
        <input 
          className='form-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          type='email'
        />
        <input 
          className='form-input'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Phone'
          type='tel'
        />
        <textarea 
          className='form-input'
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Reason for meeting'
        />

        <center>
          {emailSent &&
            <h5 className='form-submit-notif'>Request sent</h5>
          }
          <button type='submit' className='form-submit'>Submit</button>
        </center>
      </form>
    </center>
  );
}
