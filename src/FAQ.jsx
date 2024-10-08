import React, { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "What is a Mass Management System?",
      answer: "A Mass Management System (MMS) helps organizations manage data, streamline processes, and handle operations efficiently."
    },
    {
      question: "How does the system handle large data?",
      answer: "The system processes real-time data, allowing businesses to manage and analyze large datasets without performance issues."
    },
    {
      question: "Is the system scalable?",
      answer: "Yes, the system is highly scalable, which means it can grow as your business or organization expands."
    },
    {
      question: "Is the data secure?",
      answer: "The system ensures data security through role-based access, encryption, and regular audits to protect sensitive information."
    },
    {
      question: "How can I customize reports?",
      answer: "You can customize reports using the in-built reporting tool, which allows you to filter data and generate insights based on your needs."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#333',
    minHeight: '100vh',
    color: 'white', // Font color is white
  };

  const questionStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '10px',
    backgroundColor: '#444',
    margin: '10px 0',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  };

  const answerStyle = {
    maxHeight: '0px',
    overflow: 'hidden',
    transition: 'max-height 0.5s ease',
    padding: '0 10px',
    backgroundColor: '#555',
    borderRadius: '8px',
    marginTop: '5px',
    color: '#ddd',
  };

  const activeAnswerStyle = {
    maxHeight: '500px', // Adjust based on answer length
    padding: '10px',
    backgroundColor: '#555',
    borderRadius: '8px',
    marginTop: '5px',
  };

  return (
    <div style={containerStyle}>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div
            style={questionStyle}
            onClick={() => toggleAnswer(index)}
          >
            {faq.question}
          </div>
          <div
            style={activeIndex === index ? activeAnswerStyle : answerStyle}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}