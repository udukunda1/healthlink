import React, { useRef, useImperativeHandle, forwardRef } from 'react';


import Button from '../Button/Button';
import './Modal.css';

const Modal = forwardRef((props, ref) => {
  let a = useRef(null);

  function handleClose() {
    a.current.close();
  }

  function handleOpen() {
    a.current.showModal();
  }

  // Expose the handleOpen function through the ref
  useImperativeHandle(ref, () => ({
    open: handleOpen,
  }));

  return (
    <dialog ref={a}>
      <div className='place-holder'>
        <p className='place-holder__content'>Health Link</p>
      </div>
      <div className='content'>
        <h3 className='content-content'>Hello, Welcome to health link ; soon we will be able to link students to pharmacies.</h3>
      </div>
      <div className='modal-buttons'>
      <Button onClick={handleClose}>Close</Button>
      </div>
    </dialog>
  );
});

export default Modal;
