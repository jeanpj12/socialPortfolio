import React, { useState } from 'react'
import styles from './styles.module.css'
import { Button } from '../Button'
import { ButtonEmoji } from './EmojiPicker'


type TextAreaProps = React.ComponentProps<'textarea'> & {
    emojiButton: boolean
}

export function FormNewPost({emojiButton = true, ...rest }: TextAreaProps) {

    const [text, setText] = useState('')
    const [showPicker, setShowPicker] = useState(false)

    const handleEmojiClick = (emoji: string) => {
        setText((prevtext) => prevtext + emoji)
    }
    
    return <div className={styles.newPost}>
        <div className={styles.inputArea}>
            <textarea {...rest}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <ButtonEmoji onEmojiSelect={handleEmojiClick} showPicker={showPicker} setShowPicker={setShowPicker}/>
        </div>

        <div>
            <Button title='Publicar' variation={2} />
        </div>
    </div>
}