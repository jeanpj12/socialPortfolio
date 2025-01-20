import React from "react";
import styles from './sytles.module.css'

type ButtonProps = React.ComponentProps<'button'> & {
    title: string
    isActive?: boolean
    variation?: number
}

export function Button({ title, isActive = false, variation = 1, ...rest }: ButtonProps) {
    return <button
        {...rest}
        className={`
        ${styles.button}
        ${isActive ? styles.active : ''}
        ${variation === 2 ? styles.variation02 : ''}
        ${variation === 3 ? styles.variation03 : ''}
        ${variation === 4 ? styles.variation04 : ''}
        `}>
        {title}
    </button>
}