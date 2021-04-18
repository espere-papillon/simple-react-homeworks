import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const nameValue = event.currentTarget.value // need to fix
        if (nameValue) {
            setName(nameValue)
            setError('')
        }
    }
    const addUser = () => {
        if (name.trim()) {
            setError('')
            addUserCallback(name.trim())
            alert(`Hello, ${name.trim()}!` ) // need to fix
            setName('')
        }
        else {
            setError('Empty value')
        }
    }

    const totalUsers = users.length // need to fix

    const onKeyPressAddUser = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addUser()
            setName('')
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            onKeyPressAddUser={onKeyPressAddUser}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
