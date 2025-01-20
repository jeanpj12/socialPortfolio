import styles from './styles.module.css'
import { Button } from '../Buttons/Button'
import { API } from '../../services/APIService'
import Cookies from 'universal-cookie'
import { useState } from 'react';

export function FormLogin() {

    const cookies = new Cookies();

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

    const handleSubmit = async (e: any) => {

        e.preventDefault()

        try {
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
        } catch (err) {
            console.log(err)
        }
    }

    return <form>

        <div className={styles.inputWrapper}>
            <input type="email" placeholder='Email' name='email' onChange={handleChangeData}/>
        </div>

        <div className={styles.inputWrapper}>
            <input type="password" placeholder='Senha' name='password' onChange={handleChangeData}/>
        </div>

        <Button title='Login' variation={2} onClick={handleSubmit}/>

    </form>
}