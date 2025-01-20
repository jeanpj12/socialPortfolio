import React, { useState } from "react";
import styles from './sytles.module.css'

type ButtonProps = React.ComponentProps<'button'> & {
    liked?: boolean
}

export function LikeButton({ liked = false, ...rest }: ButtonProps) {

    const [like, setLike] = useState(liked)

    function handleLike(){
        setLike(!like)
    }

    return <button
        {...rest}
        className={`
        ${styles.button}
        ${like ? styles.liked : ''}
        `}
        onClick={handleLike}>
        <div className={styles.like}></div>
        curtir
    </button>
}