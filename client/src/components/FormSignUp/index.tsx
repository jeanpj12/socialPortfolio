import styles from './styles.module.css'
import { Button } from '../Buttons/Button'
import { useState } from 'react'
import { API } from '../../services/APIService'
import Cookies from 'universal-cookie';

export function FormSignUp() {

    const cookies = new Cookies();

    const [formData, setFormData] = useState({
        name: '',
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

    const handleSubmit = async (e: any) => {

        e.preventDefault()

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

                    window.location.href = '/portfolio'
                } else {
                    console.error('Falha ao realizar login', loginResponse.data)
                }
            } else {
                console.error('Erro ao criar conta:', createResponse.data);
            }
        } catch (err) {
            console.log(err)
        }
    }

    return <form>

        <div className={styles.doubleInputWrapper}>
            <input type="text" placeholder='Nome' name='name' onChange={handleChangeData} />
            <input type="text" placeholder='Sobrenome' name='surname' />
        </div>

        <div className={styles.inputWrapper}>
            <input type="text" placeholder='Cargo' name='cargo' />
        </div>

        <div className={styles.inputWrapper}>
            <input type="email" placeholder='Email' name='email' onChange={handleChangeData} />
        </div>

        <div className={styles.inputWrapper}>
            <input type="password" placeholder='Senha' name='password' onChange={handleChangeData} />
        </div>

        <Button title='Sign Up' variation={2} onClick={handleSubmit} />

    </form>
}