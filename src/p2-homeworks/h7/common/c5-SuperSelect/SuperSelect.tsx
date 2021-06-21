import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelectt.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        className,
        ...restProps
    }
) => {
    const finalSelectClassName = `${s.select} ${className ? className : ''}` // need to fix with (?:) and s.superInput

    const mappedOptions: Array<any> = Array.isArray(options)
        ? options.map((el, i) =>
            <option className={s.option} key={el + '-' + i}
            value={el}>{el}</option>) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
