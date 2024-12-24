import EmojiPicker, { Theme, Categories } from 'emoji-picker-react'
import styles from './styles.module.css'
import EmojiIcon from '../../../assets/svg/rosto-explodir.svg'

type ButtonEmojiProps = {
    setText: React.Dispatch<React.SetStateAction<string>>
    showPicker: boolean
    setShowPicker: React.Dispatch<React.SetStateAction<boolean>>
}

export function ButtonEmoji({ setText, showPicker, setShowPicker }: ButtonEmojiProps) {

    const categoryEmoji = [
        {
            category: Categories.SMILEYS_PEOPLE,
            name: 'Faces'
        }
    ]

    const handleEmojiClick = (emojiObject: any) => {
        setText((prevtext) => prevtext + emojiObject.emoji)
    }

    return <div className={styles.emoji}>
        <button
            type='button'
            onClick={() => setShowPicker((prev) => !prev)}
        >
            <img src={EmojiIcon} />
        </button>
        {showPicker && (
            <div>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    theme={Theme.DARK}
                    searchDisabled={true}
                    skinTonesDisabled={true}
                    categories={categoryEmoji}
                    className={styles.emojiContainer}
                />
            </div>
        )}
    </div>
}
