import styles from './styles.module.css'

export function SideAds(){
    return <div className={styles.sideBar}>
        <div className={styles.ads}><span>Anunciante</span></div>
        <div className={styles.ads}><span>Anunciante</span></div>
        <div className={styles.ads}><span>Anunciante</span></div>
        <div className={styles.ads}><span>Anunciante</span></div>
    </div>
}