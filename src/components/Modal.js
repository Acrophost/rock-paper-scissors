import React from 'react';
import { createPortal } from 'react-dom';
import Cross from '../images/icon-close.svg';
import Rules from '../images/image-rules.svg';

const Modal = ({ setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return createPortal(
        <div className="modal">
            <section className="modal__container">
                <button 
                    type="button" 
                    onClick={handleClose} 
                    className="modal__close"
                >
                    <img src={Cross} alt="cross" />
                </button>
                <h2 className="modal__title">RULES</h2>
                <img 
                    src={Rules} 
                    alt="scissors beat paper, paper beats rock, rock beats scissors"
                    className="modal__rules-image"
                />
            </section>
        </div>,
        document.getElementById('modal'),
    );
};

export default Modal;