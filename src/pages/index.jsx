import React from 'react';
import CompanyServices from '../components/CompanyServices';
import Header from '../components/Header';
import Layout from "../components/Layout";
import About from "../components/About";
import ScheduleForm from "../components/ScheduleForm";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Layout>
      <Header />
      <section id="section-one">
        <CompanyServices />
      </section>
      <section className="about-container">
        <About />
      </section>
      <ScheduleForm />
      <section className="contact-container"> 
        <Contact />
      </section>
    </Layout>
  );
}
