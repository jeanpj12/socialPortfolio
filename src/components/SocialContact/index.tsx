import styles from './styles.module.css'

type Props = {
    img: string
    content: string
    url: string
}

export function SocialContact({ content, img, url }: Props) {
    return <div className={styles.socialWrapper}>
        <img src={img} />
        <a href={url} target="_blank" rel="noopener noreferrer">{content}</a>
    </div>
}