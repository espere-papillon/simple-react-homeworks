import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import styles from './HW10.module.css'

const Loader = () => {
    return (
        <span className={styles.loader}>
            <span className={styles.loaderInner} ></span>
        </span>
    )
}

function HW10() {
    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 4000)
        // dispatch
        // setTimeout
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            <div className={styles.container}>{isLoading
                ? (
                    // <div>крутилка...</div>
                    <Loader />
                ) : (
                    <SuperButton onClick={setLoading} className={styles.button}>set loading...</SuperButton>
                )
            }</div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
