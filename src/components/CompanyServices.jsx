import React from 'react';

export default function CompanyServices() {
  return (
    <div className="services">
      <h1 className="services__title">Services</h1>
      <div className="services__list">
        <div className="list-item">
          <center><img src="/images/advancement.jpeg" height="200px" /></center>
          <h2>Quality Management Systems (QMS)</h2>
          <ul>
            <li>We can collaborate with you to develop, implement, and maintain your Quality Management System for compliance to global regulatory requirements.</li>
            <li>Quality System Development and Creation of Applicable Procedures</li>
            <li>Quality System Auditing under the following requirements:</li>
            <ul>
              <li>ISO 13485:2016</li>
              <li>FDA Quality System Regulations (QSR)</li>
              <li>MDSAP (Australia, Brazil, Canada, United States, Japan)</li>
              <li>EUMDR 2017/745</li>
            </ul>
          </ul>
        </div>
        <div className="list-item">
          <center><img src="/images/safety.jpeg" height="200px" /></center>
          <h2>Regulatory Affairs</h2>
          <ul>
            <li>Regulatory Standards Assessment / Gap Analysis</li>
            <li>Regulatory Review of Labeling</li>
            <li>Regulatory Review of Technical Documentation</li>
          </ul>
        </div>
        <div className="list-item">
          <center><img src="/images/quality.jpeg" height="200px" /></center>
          <h2>Quality Assurance</h2>
          <ul>
            <li>Facility Qualification / Manufacturing Transfer Facility Qualification</li>
            <li>Internal Audits</li>
            <li>Regulatory Body Pre-Audit Preparation</li>
            <li>Supplier Evaluation / Audits</li>
            <li>Internal Auditor Training</li>
          </ul>
        </div>
      </div>
    </div>
  );
}  
