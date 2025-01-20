import React from 'react'
import styles from './styles.module.css'
import IconClose from '../assets/svg/botao-fechar.svg'

type Props = {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
    title: string
}

export function Modal({ closeModal, children, title }: Props){
    return <div className={styles.container}>
        <div className={styles.modalWrapper}>
            <div className={styles.containerCloseModal}>
                <h3>{title}</h3>
                <button>
                    <img src={IconClose} onClick={() => closeModal(false)} />
                </button>
            </div>
            {children}
        </div>
    </div>
}