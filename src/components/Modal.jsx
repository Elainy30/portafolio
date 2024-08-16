import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import gif from '../assets/modal.gif'; // Asegúrate de usar la ruta correcta a tu GIF

ReactModal.setAppElement('#root'); // Asegura la accesibilidad para lectores de pantalla

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Notificación de Mejoras"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
    <img src={gif} alt="Trabajando en mejoras" className="modal-gif" />
      <h2>Estamos trabajando</h2>
      <p>
        ¡Gracias por visitar mi portafolio! <br/>
        Actualmente estamos trabajando en mejoras para ofrecerte una mejor experiencia.
        ¡Estén atentos para más actualizaciones!
      </p>
      <button onClick={closeModal}>Cerrar</button>
    </ReactModal>
  );
};

export default Modal;

