import styles from './styles.module.css'
import { Button } from '../Buttons/Button'
import { useState } from 'react';
import { AxiosError } from 'axios';
import { useUser } from '../../contexts/UserContext';
import { LoginService } from '../../services/LoginService';

type Props = {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export function FormLogin({ setLoading }: Props) {

    const { setUser } = useUser()


    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })


    const handleChangeData = (e: any) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    const [error, setError] = useState('')

    const handleSubmit = async (e: any) => {

        e.preventDefault()
        setLoading(true)

        try {
            const user = await LoginService(formData.email, formData.password)
            setUser(user)
            window.location.href = '/'
        } catch (err) {
            const axiosError = err as AxiosError;
            if (axiosError.response?.status && axiosError.message) {
                setError(axiosError.message);
            } else {
                setError('An unknown error occurred')
            }
            setLoading(false);
        }
    }

    return <>
        <form>

            <div className={styles.inputWrapper}>
                <input type="email" placeholder='Email' name='email' onChange={handleChangeData} />
            </div>

            <div className={styles.inputWrapper}>
                <input type="password" placeholder='Senha' name='password' onChange={handleChangeData} />
            </div>

            <div className={styles.errorWrapper}>
                {error && <span>{error}</span>}
            </div>

            <Button title='Login' variation={2} onClick={handleSubmit} />

        </form>
    </>
}