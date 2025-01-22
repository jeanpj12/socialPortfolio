import styles from './styles.module.css'
import fallBack from '../../assets/imgProfile.jpg'
import { useMemo, useState } from 'react'

type InputAvatarProps = {
    onFileSelected: (file: File) => void
}

export function InputAvatar({ onFileSelected }: InputAvatarProps) {

    const [file, setFile] = useState<File | null>(null)

    function handleFileSelected(event: React.ChangeEvent<HTMLInputElement>) {
        const fileList = event.target.files
        if (fileList && fileList[0]) {
            setFile(fileList[0]);
            onFileSelected(fileList[0]);
        }
    }

    const previewURL = useMemo(() => {
        if (!file) {
            return null
        }
        return URL.createObjectURL(file)

    }, [file])

    return (
        <div className={styles.inputAvatar}>
            <div className={styles.avatar}>
                {!previewURL ? <img src={fallBack} /> : <img src={previewURL} />}
                <input type="file" accept="image/*" id="avatar" name="avatar" onChange={handleFileSelected} />
            </div>
            <label htmlFor="avatar">Escolha uma imagem para sua foto de perfil</label>
        </div>
    )
}