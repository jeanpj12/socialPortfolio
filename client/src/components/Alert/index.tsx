import styles from './styles.module.css'

type Props = {
    message: string
}

export function Alert({message}: Props){
    return <span className={styles.message} dangerouslySetInnerHTML={{ __html: message }}></span>
}