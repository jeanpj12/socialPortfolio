import styles from './styles.module.css'


export function FormContact(){
    return <form>

        <div className={styles.doubleInputWrapper}>
            <input type="text" placeholder='Nome'/>
            <input type="text" placeholder='Sobrenome'/>
        </div>

        <div className={styles.inputWrapper}>
            <input type="email" placeholder='Email'/>
        </div>

        <div className={styles.inputWrapper}>
            <input type="tel" placeholder='Telefone'/>
        </div>

        <div className={styles.inputWrapper}>
            <textarea placeholder='Mensagem'/>
        </div>

    </form>
}