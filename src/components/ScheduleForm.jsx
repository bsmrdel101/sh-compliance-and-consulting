import { useState } from 'react';
import emailjs, { init } from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
init(process.env.NEXT_PUBLIC_EMAILJS_KEY);


export default function ScheduleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert('Complete the reCAPTCHA first');
      return;
    }

    const params = {
      name,
      email,
      phone,
      description,
      'g-recaptcha-response': captchaToken
    };

    try {
      await emailjs.send('service_evx9vw1', 'template_fv5c4ee', params); 
    } catch (error) {
      console.error(error);
    }

    setName('');
    setEmail('');
    setPhone('');
    setDescription('');
    setCaptchaToken('');
    setEmailSent(true);
  };


  return (
    <center>
      <form onSubmit={sendEmail} className='form-container'>
        <h3 className='form-title'>Schedule a Consultation</h3>
        <input 
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input 
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          required
        />
        <input 
          className="form-input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          type="tel"
        />
        <textarea 
          className="form-input"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Reason for meeting"
        />
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={(token) => setCaptchaToken(token)}
        />

        <center>
          { emailSent && <h5 className="form-submit-notif">Request sent</h5> }
          <button type="submit" className="form-submit">Submit</button>
        </center>
      </form>
    </center>
  );
}
