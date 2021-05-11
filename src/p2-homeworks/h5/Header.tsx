import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import styles from "./Header.module.css"

function Header() {

    let [menuHidden, setMenuHidden] = useState<boolean>(true)
    const onClickButton = () => {
        setMenuHidden(!menuHidden)
    }
    // const onCBlurClick = () => {
    //     setMenuHidden(true)
    // }

    let styleMenuHidden = `${menuHidden ? styles.menuHidden : ''}`
    return (
        <div>
            {/*// add NavLinks*/}
            <header className={styles.header}>
                <div className={styleMenuHidden}>
                    <nav className={styles.menu} data-active="false">
                        <div className={styles.menuBlock}>
                            <NavLink className={styles.menuItem} to="/pre-junior">Pre junior</NavLink>
                        </div>
                        <div className={styles.menuBlock}>
                            <NavLink className={styles.menuItem} to="/junior">Junior</NavLink>
                        </div>
                        <div className={styles.menuBlock}>
                            <NavLink className={styles.menuItem} to="/super-junior">Super junior</NavLink>
                        </div>
                    </nav>
                </div>
                <div>
                    <button className={styles.menuButton} onClick={onClickButton}>Menu</button>
                </div>
            </header>
        </div>
    )
}

export default Header
