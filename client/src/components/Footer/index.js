import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
      <h4>
        <Link
        to="/chatbot"
        title="chatbot page"
        className="chatbot-button"
      >
        Click here to connect with a Chatter
      </Link>
      </h4>

        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="brain"
            aria-hidden="false"
          >
            🧠
          </span>{' '}
          by Brandon McCauley.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
