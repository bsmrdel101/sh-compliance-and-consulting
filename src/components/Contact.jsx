import Image from 'next/image';


export default function Contact() {
  return (
    <article className="contact">
      <h2 className="contact__title">Contact</h2>
      <div>
        <p className="contact__name">Ruth Hansen</p>
        <p>(651)-964-5235</p>
      </div>
      <p className="contact__email">SHcomplianceconsulting@gmail.com</p>
      <Image className="contact__icon" src="/images/linkedin.jpg" alt="LinkedIn icon" onClick={() => window.open("https://www.linkedin.com/in/ruth-hansen-b1b5a2167/")} height={45} width={45} />
    </article>
  );
}
