import React, { useState } from 'react'
import styles from './styles.module.css'
import { Button } from '../Button'
import { ButtonEmoji } from './Emoji'


type TextAreaProps = React.ComponentProps<'textarea'>

export function FormNewPost({ ...rest }: TextAreaProps) {

    const [text, setText] = useState('')
    const [showPicker, setShowPicker] = useState(true)

    return <div className={styles.newPost}>
        <div className={styles.inputArea}>
            <textarea {...rest}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <ButtonEmoji
            setText={setText}
            showPicker={showPicker}
            setShowPicker={setShowPicker}
            />
        </div>

        <div>
            <Button title='Publicar' variation={2} />
        </div>
    </div>
}