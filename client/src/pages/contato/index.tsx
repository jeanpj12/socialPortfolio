import styles from './styles.module.css'
import { FormContact } from '../../components/FormContact'
import { SocialContact } from '../../components/SocialContact'
import instagram from '../../assets/svg/instagram.svg'
import github from '../../assets/svg/github.svg'
import email from '../../assets/svg/o-email.svg'
import whatsapp from '../../assets/svg/whatsapp.svg'
import { ProfileBadge } from '../../components/ProfleBadge'

export function Contact() {

    const social = [
        {
            img: instagram,
            content: '@jean.jr_',
            url: 'https://www.instagram.com/jean.jr_/'
        },
        {
            img: whatsapp,
            content: '+55 83 9617-6172',
            url: 'https://wa.me/558396176172'
        },
        {
            img: email,
            content: 'contato@jeanjr.com',
            url: 'mailto:contato@jeanjr.com'
        },
        {
            img: github,
            content: '@jeanpj12',
            url: 'https://github.com/jeanpj12'
        },
    ]

    return <div className={styles.container}>

        <div className={styles.socialContact}>
            <div className={styles.profile}>
                <ProfileBadge name='Jean Jr.' status='Developer' img='https://github.com/jeanpj12.png' />
            </div>
            {social.map((social, index) => (
                <SocialContact
                    img={social.img}
                    content={social.content}
                    url={social.url}
                    key={index}
                />
            )
            )}
        </div>
        {/* <FormContact /> */}
    </div>
}