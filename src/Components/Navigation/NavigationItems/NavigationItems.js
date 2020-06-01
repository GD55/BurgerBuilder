import React from 'react'
import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

function NavigationItems() {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link='/' active>
                Burger Builder
            </NavigationItem>
            <NavigationItem link='/'>
                CheckOut
            </NavigationItem>
        </ul>
    )
}

export default NavigationItems