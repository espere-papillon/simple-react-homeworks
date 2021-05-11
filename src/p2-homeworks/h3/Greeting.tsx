import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import styles from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
        <div className={styles.form}>
            {/*<input value={name} onChange={setNameCallback} onKeyPress={onKeyPressAddUser} className={inputClass}/>*/}
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                onKeyPress={onKeyPressAddUser}
                onBlur={setNameCallback}
                placeholder={error ? error : "Type anything..."}
                error={error}
                // spanClassName={s.testSpanError}
            />
            {/*<button className={styles.addUser} onClick={addUser} disabled={!name}>+</button>*/}
            <SuperButton disabled={!name} onClick={addUser} className={styles.addBtn}>
                +
            </SuperButton>
            <span className={styles.numberUsers}>Number of users: {totalUsers}</span>
            {/*<div>*/}
            {/*    <span className={styles.errorText}>{error}</span>*/}
            {/*</div>*/}
        </div>
    )
}

export default Greeting
