import styles from './styles.module.css'
import EmojiIcon from '../../../assets/svg/rosto-explodir.svg'

type EmojiPickerProps = {
    onEmojiSelect: (emoji: string) => void
    showPicker: boolean
    setShowPicker: React.Dispatch<React.SetStateAction<boolean>>
}

export function ButtonEmoji({ onEmojiSelect, showPicker, setShowPicker }: EmojiPickerProps) {

    const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
        "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "🙂", "🤗",
        "🤩", "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥",
        "😮", "🤐", "😯", "😪", "😫", "🥱", "😴", "😌", "😛", "😜",
        "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🫤", "🫣", "☹️",
        "🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨",
        "👍", "👎", "👌", "✌️", "🤞", "🤟", "👊", "👏", "🙏", "💪",
        "🤝", "✋", "🖖", "👋", "🖐️", "✍️", "🤳", "💅", "🤲", "🤷",
        "❤️", "💔", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟",
        "🎉", "✨", "🌟", "⭐", "🌈", "⚡", "🔥", "💧", "🌊", "☔",
        "❄️", "☀️", "🌤", "🌙", "☁️", "🌍", "🌎", "🌌", "🌹", "💐",
        "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯",
        "🦁", "🐮", "🐷", "🐸", "🐵", "🙈", "🙉", "🙊", "🐦", "🐤",
        "🐺", "🦄", "🐝", "🪲", "🦋", "🐌", "🐞", "🐜", "🪳", "🪰",
        "🍕", "🍔", "🍟", "🌮", "🌯", "🍿", "🍩", "🍪", "🍦", "🍫",
        "⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🎳", "🏓", "🥊", "🎮",
        "🚗", "🚕", "🚙", "🛴", "🚲", "🛵", "🚤", "✈️", "🚀", "🛸",
    ];

    return <div className={styles.emoji}>
        <button
            type='button'
            onClick={() => setShowPicker((prev) => !prev)}
        >
            <img src={EmojiIcon} />
        </button>

        {showPicker &&
            <div className={styles.picker}>
                {emojis.map((emoji, index) => (
                    <button
                        key={index}
                        className={styles.emojiButton}
                        onClick={() => onEmojiSelect(emoji)}>
                        {emoji}
                    </button>
                ))
                }
            </div>
        }
    </div>
}
