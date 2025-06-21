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
      <main>
        <section id="header">
          <Header />
        </section>
        <section id="company-services">
          <CompanyServices />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="schedule-form">
          <ScheduleForm />
        </section>
        <section id="contact"> 
          <Contact />
        </section>
      </main>
    </Layout>
  );
}
