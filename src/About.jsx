

import React from 'react';

export default function AboutUs() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Full viewport height
    padding: '20px',
    backgroundColor:'#4e4a4a', // Changed container background color
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '800px', // Limit the width for the card layout
    padding: '20px',
    backgroundColor: '#333', // Changed card background color to dark
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Card shadow for modern look
    overflowY: 'auto', // Scrollable on Y-axis
    maxHeight: '80vh', // Constrain height to fit within viewport
    color: '#fff', // Changed font color to white
  };

  const h1Style = {
    fontSize: '30px',
    color: 'white', // Changed to golden color for better contrast
    textAlign: 'center',
    marginBottom: '20px',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const h2Style = {
    fontSize: '22px',
    color: 'white', // Changed to golden color for better contrast
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#fff', // Changed to white for better contrast
    textAlign: 'justify',
  };

  const ulStyle = {
    paddingLeft: '20px',
    color: '#fff', // Changed to white for better contrast
  };

  const liStyle = {
    marginBottom: '10px',
  };

  // Media query logic for smaller screens
  const isSmallScreen = window.innerWidth <= 768;
  if (isSmallScreen) {
    h1Style.fontSize = '26px';
    h2Style.fontSize = '20px';
    paragraphStyle.fontSize = '14px';
    cardStyle.padding = '15px';
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={h1Style}>About the Class Management System</h1>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Introduction</h2>
          <p style={paragraphStyle}>
            The Class Management System (CMS) is designed to efficiently handle and manage large-scale data and 
            operations for businesses or institutions that require handling vast amounts of information daily. 
            CMS allows streamlined workflows, data analysis, and real-time monitoring to ensure smooth operations.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Key Features</h2>
          <ul style={ulStyle}>
            <li style={liStyle}><strong>Real-time Data Processing:</strong> CMS processes real-time data for accurate and timely decision-making.</li>
            <li style={liStyle}><strong>User-friendly Interface:</strong> A simple, intuitive interface allows easy navigation and interaction.</li>
            <li style={liStyle}><strong>Customizable Reports:</strong> Generate tailored reports based on your specific needs.</li>
            <li style={liStyle}><strong>Scalability:</strong> CMS is scalable, allowing it to grow with your organization’s needs.</li>
            <li style={liStyle}><strong>Security:</strong> CMS ensures data security through role-based access and data encryption.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Why Choose CMS?</h2>
          <p style={paragraphStyle}>
            CMS stands out because of its ability to handle high volumes of data without compromising speed or accuracy. 
            Our system is ideal for businesses that require complex operations management, real-time updates, and 
            data-driven insights.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Other Information</h2>
          <p style={paragraphStyle}>
            Whether you're running a small business or a large institution, the Class Management System offers 
            customization options that fit your needs. CMS is compatible with a wide variety of platforms and 
            integrates with most existing systems seamlessly.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Contact Us</h2>
          <p style={paragraphStyle}>
            For more information, feel free to reach out to us at <strong>support@massmanagement.com</strong>. 
            We are here to help you optimize your processes and scale your business with confidence.
          </p>
        </section>
      </div>
    </div>
  );
}