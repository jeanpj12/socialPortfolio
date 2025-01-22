import styles from './styles.module.css'
import { Button } from '../Buttons/Button'
import { useState } from 'react'
import { API } from '../../services/APIService'
import { AxiosError } from 'axios';
import { LoginService } from '../../services/LoginService';
import { useUser } from '../../contexts/UserContext';

type Props = {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export function FormSignUp({ setLoading }: Props) {
    const { setUser } = useUser()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [error, setError] = useState('')

    const handleChangeData = (e: any) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e: any) => {

        e.preventDefault()
        setLoading(true)
        try {
            const createResponse = await API.post(
                '/user/create',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            if (createResponse.status === 201) {
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
        } catch (err) {
            setLoading(false)
            if (err instanceof AxiosError) {
                setError(err.response?.data.message)
            } else {
                setError('An unknown error occurred')
            }
        }
    }

    return <form>

        <div className={styles.doubleInputWrapper}>
            <input type="text" placeholder='Nome' name='name' min={3} onChange={handleChangeData} required />
            <input type="text" placeholder='Sobrenome' name='lastName' min={3} required onChange={handleChangeData} />
        </div>

        <div className={styles.inputWrapper}>
            <input type="text" placeholder='Cargo' name='status' required onChange={handleChangeData} />
        </div>

        <div className={styles.inputWrapper}>
            <input type="email" placeholder='Email' name='email' onChange={handleChangeData} required />
        </div>

        <div className={styles.inputWrapper}>
            <input type="password" placeholder='Senha' name='password' onChange={handleChangeData} required />
        </div>

        <div className={styles.errorWrapper}>
            {error && <span>{error}</span>}
        </div>

        <Button title='Sign Up' variation={2} onClick={handleSubmit} />

    </form>
}