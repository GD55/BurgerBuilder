import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import styles from './Logo.module.css'

function Logo() {
    return (
        <div className={styles.Logo}>
            <img src={burgerLogo} alt='MyBurger' />
        </div>
    )
}

export default Logo
