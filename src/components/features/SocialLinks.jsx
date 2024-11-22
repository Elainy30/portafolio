import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
    </div>
  );
};

export default SocialLinks;
