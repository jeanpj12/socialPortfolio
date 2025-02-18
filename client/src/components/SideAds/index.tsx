import styles from './styles.module.css'
import Ad01 from '../../assets/ads01.webp'

export function SideAds(){
    return <div className={styles.sideBar}>
        <a href="https://hostinger.com.br?REFERRALCODE=C4GJEANJR853" target='_blank'><img src={Ad01}/></a>
    </div>
}