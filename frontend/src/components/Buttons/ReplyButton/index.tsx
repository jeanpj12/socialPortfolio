import styles from './sytles.module.css'

type ButtonProps = React.ComponentProps<'button'>

export function ReplyButton({...rest }: ButtonProps) {

    return <button
        {...rest}
        className={`
        ${styles.button}
        `}>
        <div className={styles.comment}></div>
        Responder
    </button>
}