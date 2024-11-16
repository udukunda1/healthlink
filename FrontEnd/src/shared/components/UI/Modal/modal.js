import React, { useRef, useImperativeHandle, forwardRef } from 'react';

//addButton={name: '', handleClick={...}};


import Button from '../Button/Button';
import './Modal.css';

const Modal = forwardRef(({children, addButton='', ...props}, ref) => {
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
    close: handleClose
  }));

  return (
    <dialog
     ref={a}
     initial={{opacity: 0, y: -30}}
     animate={{opacity: 1, y: 0}}
     {...props}
     >
      <div className='place-holder'>
        <p className='place-holder__content'>Health Link</p>
      </div>
      <div className='content'>
        <h3 className='content-content'>
          {children}
        </h3>
      </div>
      <div className='modal-buttons'>
      {!!addButton && <Button onClick={addButton.handleClick} {...props}>{addButton.name}</Button>}
      <Button onClick={handleClose} type='red' className='red' {...props}>Close</Button>
      </div>
    </dialog>
  );
});

export default Modal;
