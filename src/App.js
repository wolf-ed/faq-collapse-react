import './App.css';
import { BsChat } from 'react-icons/bs'
import { AiOutlineDown, AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react';

function App() {
  const [faqClassName, setFaqClassName] = useState('faq active')

  const handleToggle = () => {
    if (faqClassName.trim().includes('active')) {
      setFaqClassName('faq')
    } else {

      setFaqClassName('faq active')
    }
  }

  return (
    <div className="faq-container">

      <div className={faqClassName}>
        <BsChat className={`${faqClassName} active cc`} />
        <BsChat className={`${faqClassName} active vv`} />

        <h3 className="faq-title">
          What is JavaScript?
        </h3>
        <p className="faq-text">
          JavaScript is a text-based programming language used both on the client-side and server-side that allows
          you to make web pages interactive.
        </p>

        <button className="faq-toggle" onClick={handleToggle}>
          <AiOutlineDown className="fas fa-chevron-down" />
          <AiFillCloseCircle className="fas fa-times" />
        </button>
      </div>

    </div >
  );
}

export default App;
