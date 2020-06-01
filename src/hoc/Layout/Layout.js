import React, { useState } from 'react';
import styles from './Layout.module.css';
import Aux from '../auxiliary';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

function Layout(props) {
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        console.log('clicked');
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <Aux>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                open={showSideDrawer}
                closed={sideDrawerClosedHandler} />
            <main className={styles.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;