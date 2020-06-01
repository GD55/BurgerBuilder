import React from 'react'
import styles from './Modal.module.css';
import Aux from '../../../hoc/auxiliary';
import Backdrop from '../Backdrop/Backdrop';

function Modal(props) {
    return (
        <Aux>
            <div
                className={styles.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
            <Backdrop show={props.show} clicked={props.closeModal} />
        </Aux>
    )
}

export default Modal
