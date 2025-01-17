import styles from './styles.module.css'
import { Button } from '../Buttons/Button'

export function FormLogin() {

    return <form>

        <div className={styles.inputWrapper}>
            <input type="email" placeholder='Email' />
        </div>

        <div className={styles.inputWrapper}>
            <input type="password" placeholder='Senha' />
        </div>

        <Button title='Login' variation={2} />

    </form>
}