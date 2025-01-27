import styles from './styles.module.css'
import { Button } from '../Buttons/Button'
import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { API } from '../../services/APIService';
import { useUser } from '../../contexts/UserContext';

type CommentProps = {
    active?: boolean
    reply?: boolean
    post_id: string
    setReloadComments: React.Dispatch<SetStateAction<boolean>>
    setShowComments: React.Dispatch<SetStateAction<boolean>>
}

export function FormComment({ active = true, reply = false, post_id, setReloadComments, setShowComments }: CommentProps) {

    const { user } = useUser()
    const [text, setText] = useState('')

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (active && textAreaRef.current) {
            textAreaRef.current.focus();
        }
    }, [active]);

    const handleChange = (event: React.ChangeEvent) => {
        const target = event.target as HTMLTextAreaElement;
        setText(target.value);
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await API.post('/comment',
                {
                    user_id: user?.id,
                    post_id,
                    comment: text
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            setReloadComments(true)
            setText('')
            setShowComments(false)

        } catch (err) {
            console.error('Erro ao comentar', err)
            setText('')
        }
    }



    return <div className={`${styles.commentWrapper} ${active && styles.active} ${reply && styles.reply}`}>
        <div className={styles.comment}>
            <textarea ref={textAreaRef} onChange={handleChange}></textarea>
            <Button title='Comentar' variation={2} onClick={handleSubmit}/>
        </div>
    </div>
}