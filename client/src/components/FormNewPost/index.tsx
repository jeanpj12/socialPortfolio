import React, { useState } from 'react'
import styles from './styles.module.css'
import { Button } from '../Buttons/Button'
import { ButtonEmoji } from './EmojiPicker'
import { PostsProps } from '../../types/Post'
import Cookies from 'universal-cookie'
import { Alert } from '../Alert'
import { Modal } from '../../modal'


type postFormProps = React.ComponentProps<'textarea'> & {
    onAddPost: (newPost: PostsProps) => void
    emojiButton?: boolean
}

export function FormNewPost({ emojiButton = true, onAddPost, ...rest }: postFormProps) {

    const cookies = new Cookies()

    const [text, setText] = useState('')
    const [showPicker, setShowPicker] = useState(false)
    const [alertModal, setAlertModal] = useState(false)


    const handleEmojiClick = (emoji: string) => {
        setText((prevtext) => prevtext + emoji)
    }

    const handleSendPost = () => {

        if (!text.trim()) {
            return
        }


        if (cookies.get('jwt') === undefined) {
            setAlertModal(true)
        }

        const newPost = {
            id: Math.floor(Math.random() * 1000),
            user: {
                name: 'Robson Silva.',
                status: 'Empreendedor'
            },
            publishedAt: new Date().toISOString(),
            content: text,
            comments: []
        }
        onAddPost(newPost)
        setText('')
        setShowPicker(false)
    }

    return <div className={styles.newPost}>
        {
            alertModal && <Modal
                title='Aviso'
                closeModal={setAlertModal}>
                <Alert 
                message="Para publicar é necessário estar logado. <br /> Crie uma conta ou faça login."
                />
            </Modal>
        }
        <div className={styles.inputArea}>
            <textarea {...rest}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            {emojiButton &&
                <ButtonEmoji onEmojiSelect={handleEmojiClick} showPicker={showPicker} setShowPicker={setShowPicker} />}
        </div>

        <div className={styles.sendPost}>
            <Button title='Publicar' variation={2} onClick={handleSendPost} />
        </div>
    </div>
}