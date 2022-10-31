import React from 'react';

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__title">Contact</h2>
      <div>
        <p className="contact__name">Ruth Hansen</p>
        <p>(651)-964-5235</p>
      </div>
      <p className="contact__email">SHcomplianceconsulting@gmail.com</p>
      <img src="/images/linkedin.png" className="contact__icon" onClick={() => window.open("https://www.linkedin.com/in/ruth-hansen-b1b5a2167/")} />
    </div>
  );
}
