import React from 'react'
import Aux from '../../hoc/auxiliary'
import styles from './Layout.module.css'

export default function Layout(props) {
    return (
        <Aux>
            <div>
                Toolbar, Sidedrawer, backdrop
            </div>
            <main className={styles.Content}>
                {props.children}
            </main>
        </Aux>
    )
}
