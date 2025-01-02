import styles from './styles.module.css'
import { Button } from '../Buttons/Button'
import { useEffect, useRef } from 'react';

type CommentProps = {
    active?: boolean
    reply?: boolean
}

export function FormComment({ active = true, reply = false }: CommentProps) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (active && textAreaRef.current) {
            textAreaRef.current.focus();
        }
    }, [active]);

    return <div className={`${styles.commentWrapper} ${active && styles.active} ${reply && styles.reply}`}>
        <div className={styles.comment}>
            <textarea ref={textAreaRef}></textarea>
            <Button title='Comentar' variation={2} />
        </div>
    </div>
}