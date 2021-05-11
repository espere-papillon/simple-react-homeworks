import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Header.module.css"

function Header() {

    // document.addEventListener('DOMContentLoaded', () => {
    //     const revealerNav = window.revealer({
    //         revealElementSelector: '.nav-js',
    //         options: {
    //             anchorSelector: '.nav-btn-js',
    //         },
    //     });
    //
    //     const actionBtn = document.querySelector('.nav-btn-js');
    //     actionBtn.addEventListener('click', () => {
    //         if (!revealerNav.isRevealed()) {
    //             revealerNav.reveal();
    //             actionBtn.setAttribute('data-open', true);
    //         } else {
    //             revealerNav.hide();
    //             actionBtn.setAttribute('data-open', false);
    //         }
    //     });
    // });

    return (
        <div>
            {/*// add NavLinks*/}
            <header>
                <div>
                    {/*<button className="header__button nav-btn-js" type="button"></button>*/}
                    <button className={styles.header__button} type="button"></button>
                    {/*<nav className="header__nav nav-js header__menu" data-active="false">*/}
                    <nav className={`${styles.header__nav} ${styles.header__menu}`} data-active="false">
                        <div className={styles.header__menuItem}>
                            <NavLink to="/pre-junior">Pre junior</NavLink>
                        </div>
                        <div className={styles.header__menuItem}>
                            <NavLink to="/junior">Junior</NavLink>
                        </div>
                        <div className={styles.header__menuItem}>
                            <NavLink to="/super-junior">Super junior</NavLink>
                        </div>
                    </nav>
                </div>
            </header>


        </div>
    )
}

export default Header
