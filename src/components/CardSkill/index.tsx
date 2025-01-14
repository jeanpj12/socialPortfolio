import styles from './styles.module.css'

type Props = {
    img: string,
    title: string,
    level: string,
    description: string
}

export function CardSkill({img, description, level, title}: Props) {
    return <div className={styles.container}>
        <header>
            <img src={img} />
            <div>
                <h2>{title}</h2>
                <span>{level}</span>
            </div>
        </header>
        <span>
            {description}
        </span>
    </div>
}