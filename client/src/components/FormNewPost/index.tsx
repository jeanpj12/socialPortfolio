import React, { useMemo, useState } from 'react'
import styles from './styles.module.css'
import { Button } from '../Buttons/Button'
import { ButtonEmoji } from './EmojiPicker'
import Cookies from 'universal-cookie'
import { Alert } from '../Alert'
import { Modal } from '../../modal'
import ImageIcon from '../../assets/svg/foto.svg'
import { useUser } from '../../contexts/UserContext'

type postFormProps = React.ComponentProps<'textarea'> & {
    onAddPost: (newPost: FormData) => void
    emojiButton?: boolean
}
export function FormNewPost({ emojiButton = true, onAddPost, ...rest }: postFormProps) {

    const cookies = new Cookies()
    const { user } = useUser()

    const [text, setText] = useState('')
    const [showPicker, setShowPicker] = useState(false)
    const [alertModal, setAlertModal] = useState(false)
    const [image, setImage] = useState<File | null>(null)

    const previewURL = useMemo(() => {
        if (!image) {
            return null
        }
        return URL.createObjectURL(image)

    }, [image])

    const handleEmojiClick = (emoji: string) => {
        setText((prevtext) => prevtext + emoji)
    }

    function handleFileSelected(event: React.ChangeEvent<HTMLInputElement>) {
        const fileList = event.target.files
        if (fileList && fileList[0]) {
            setImage(fileList[0]);
        }
    }

    const handleSendPost = () => {

        if (!text.trim()) {
            return
        }


        if (cookies.get('jwt') === undefined) {
            setAlertModal(true)
        }

        const formData = new FormData();
        formData.append('user_id', cookies.get('user_id'))
        formData.append('content', text)
        if (image) {
            formData.append('imageUrl', image)
        }

        onAddPost(formData)
        setText('')
        setImage(null)
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
            {previewURL && <img src={previewURL} className={styles.imagePost} />}

            <div className={styles.optionsWrapper}>

                {emojiButton &&
                    <ButtonEmoji onEmojiSelect={handleEmojiClick} showPicker={showPicker} setShowPicker={setShowPicker} />}

                <div className={styles.image}>
                    {
                        user?.role === 'admin' &&
                        <label htmlFor="image">
                            <img src={ImageIcon} className={styles.imageIcon} />
                        </label>
                    }
                    <input type="file" accept="image/*" id="image" name="image" onChange={handleFileSelected} />
                </div>
            </div>

        </div>

        <div className={styles.sendPost}>
            <Button title='Publicar' variation={2} onClick={handleSendPost} />
        </div>
    </div>
}