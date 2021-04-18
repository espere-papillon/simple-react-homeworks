import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import styles from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    onKeyPressAddUser: (event: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPressAddUser, error, addUser, totalUsers} // error, // деструктуризация пропсов
) => {

    const inputClass = error ? styles.error : styles.input // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressAddUser} className={inputClass}/>
            <button className={styles.addUser} onClick={addUser} disabled={!name}>+</button>
            <span className={styles.numberUsers}>Number of users: {totalUsers}</span>
            <div>
                <span className={styles.errorText}>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
