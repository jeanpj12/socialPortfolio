import styles from './styles.module.css'
import { Button } from '../Buttons/Button'

export function FormSignUp() {

    return <form>

    <div className={styles.doubleInputWrapper}>
        <input type="text" placeholder='Nome' />
        <input type="text" placeholder='Sobrenome' />
    </div>

    <div className={styles.inputWrapper}>
        <input type="text" placeholder='Cargo' />
    </div>

    <div className={styles.inputWrapper}>
        <input type="email" placeholder='Email' />
    </div>

    <div className={styles.inputWrapper}>
        <input type="password" placeholder='Senha' />
    </div>

    <Button title='Sign Up' variation={2}/>

</form>
}