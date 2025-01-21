import styles from './styles.module.css'
import { Button } from '../Buttons/Button'
import { useState } from 'react'
import { API } from '../../services/APIService'
import Cookies from 'universal-cookie';
import { AxiosError } from 'axios';


type Props = {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export function FormSignUp({ setLoading }: Props) {

    const cookies = new Cookies();

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
                const loginResponse = await API.post(
                    '/session',
                    {
                        email: formData.email,
                        password: formData.password
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                if (loginResponse.status === 200) {
                    cookies.set('jwt', loginResponse.data.token, {
                        path: '/',
                        secure: true,
                        sameSite: 'strict',
                        maxAge: 86400
                    })

                    window.location.href = '/'
                } else {
                    console.error('Falha ao realizar login', loginResponse.data)
                }
            } else {
                console.error('Erro ao criar conta:', createResponse.data);
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
            <input type="text" placeholder='Nome' name='name' min={3} onChange={handleChangeData} required/>
            <input type="text" placeholder='Sobrenome' name='lastName' min={3} required onChange={handleChangeData}/>
        </div>

        <div className={styles.inputWrapper}>
            <input type="text" placeholder='Cargo' name='status' required onChange={handleChangeData}/>
        </div>

        <div className={styles.inputWrapper}>
            <input type="email" placeholder='Email' name='email' onChange={handleChangeData} required/>
        </div>

        <div className={styles.inputWrapper}>
            <input type="password" placeholder='Senha' name='password' onChange={handleChangeData} required/>
        </div>

        <div className={styles.errorWrapper}>
            {error && <span>{error}</span>}
        </div>

        <Button title='Sign Up' variation={2} onClick={handleSubmit} />

    </form>
}