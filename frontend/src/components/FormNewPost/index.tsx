import React, { useState } from 'react'
import styles from './styles.module.css'
import { Button } from '../Buttons/Button'
import { ButtonEmoji } from './EmojiPicker'
import { PostsProps } from '../../types/Post'


type postFormProps = React.ComponentProps<'textarea'> & {
    onAddPost: (newPost: PostsProps) => void
    emojiButton?: boolean
}

export function FormNewPost({ emojiButton = true, onAddPost, ...rest }: postFormProps) {

    const [text, setText] = useState('')
    const [showPicker, setShowPicker] = useState(false)

    const handleEmojiClick = (emoji: string) => {
        setText((prevtext) => prevtext + emoji)
    }

    const handleSendPost = () => {

        if (!text.trim()) {
            return
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