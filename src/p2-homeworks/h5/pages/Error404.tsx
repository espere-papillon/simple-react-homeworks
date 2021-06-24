import React from 'react'
import styles from './Error404.module.css'

function Error404() {
    return (
        <div>
            {/*<div>404</div>*/}
            {/*<div>Page not found!</div>*/}
            {/*<div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*/}
            <div className={styles.pageNotFound}>404</div>
        </div>
    )
}

export default Error404
