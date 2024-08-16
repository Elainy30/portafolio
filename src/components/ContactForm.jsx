import React, { useState } from 'react';
import Swal from 'sweetalert2';
import logo from '../assets/contact.png';  

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Atención',
      text: 'Esta parte del formulario aún no está habilitada.',
      icon: 'info',
      confirmButtonText: 'Entendido',
    });
  };

  return (
    <section  id="contact" className="contact-form-section">
      <h2>Contacto</h2>
      <div className="contact-container">
      <div className="contact-logo">
          <img src={logo} alt="Personal Logo" />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">Nombre</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Tu apellido"
            required
          />
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
            required
          />
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tu mensaje"
            rows="4"
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
