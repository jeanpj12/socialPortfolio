import styles from './styles.module.css'
import { ProfileBadge } from '../ProfleBadge'
import { Button } from '../Button'

export function CardPost() {

    const comments = [
        {
            user: 'João Silva',
            status: 'Dev Frontend',
            comment: 'Achei o design bem intuitivo, mas o menu poderia ser mais responsivo.',
            replies: [
                {
                    user: 'Maria Oliveira',
                    status: 'Dev UI/UX',
                    reply: 'Concordo! Podemos ajustar o menu na próxima sprint.'
                },
                {
                    user: 'Carlos Almeida',
                    status: 'Dev Backend',
                    reply: 'Se precisarem de suporte no back, só avisar!'
                }
            ]
        },
        {
            user: 'Ana Costa',
            status: 'Dev Fullstack',
            comment: 'O carregamento da página inicial está um pouco lento. Talvez precisemos otimizar as requisições.',
            replies: [
                {
                    user: 'Pedro Santos',
                    status: 'Dev Backend',
                    reply: 'Vou revisar as chamadas para a API. Pode ser algo relacionado ao cache.'
                },
                {
                    user: 'Renata Lima',
                    status: 'Dev Frontend',
                    reply: 'Também vou verificar se há algo no React contribuindo para isso.'
                }
            ]
        },
        {
            user: 'Felipe Rocha',
            status: 'Dev Web',
            comment: 'Os ícones estão desalinhados no mobile. Precisamos revisar o CSS para dispositivos menores.',
            replies: [
                {
                    user: 'Beatriz Souza',
                    status: 'Dev UI/UX',
                    reply: 'Boa observação! Vou ajustar as margens e testar em diferentes resoluções.'
                }
            ]
        },
        {
            user: 'Lucas Mendes',
            status: 'Dev Backend',
            comment: 'A autenticação está funcionando bem, mas precisamos melhorar as mensagens de erro.',
            replies: [
                {
                    user: 'Camila Ferreira',
                    status: 'Dev Fullstack',
                    reply: 'Vou criar mensagens mais claras e traduzir para o usuário final.'
                }
            ]
        },
        {
            user: 'Juliana Pereira',
            status: 'Dev Frontend',
            comment: 'O modal de confirmação está demorando para abrir. Pode ser problema de performance.',
            replies: [
                {
                    user: 'Gabriel Costa',
                    status: 'Dev Backend',
                    reply: 'Pode ser o tempo de resposta do servidor. Vou analisar os logs.'
                },
                {
                    user: 'Larissa Almeida',
                    status: 'Dev Frontend',
                    reply: 'Vou verificar os handlers no React para ver se há delays.'
                }
            ]
        }
    ];


    return <div className={styles.cardPost}>
        <div className={styles.post}>
            <header>
                <ProfileBadge name='Jean Jr.' status='Dev Web' />
            </header>
            <div>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia error vitae quo maxime, corporis sequi at quisquam doloribus saepe, reprehenderit natus nostrum eaque suscipit atque esse pariatur expedita! Omnis, a.
                </span>
            </div>
            <div className={styles.engagement}>
                <Button title='curtir' variation={3} />
                <Button title='comentar' variation={3} />
            </div>
        </div>
        <div className={styles.comments}>

            {comments.map((comment) => (
                <div className={styles.comment}>
                    <div className={styles.cardComment}>
                        <header>
                            <ProfileBadge name={comment.user} status={comment.status} viewStatus={false} />
                        </header>
                        <div>
                            <span>
                                {comment.comment}
                            </span>
                        </div>
                        <div className={styles.engagement}>
                            <Button title='curtir' variation={3} />
                            <Button title='responder' variation={3} />
                        </div>
                    </div>
                    <div className={styles.replies}>
                        {comment.replies && comment.replies.map((reply) => (
                            <div className={styles.cardReply}>
                                <header>
                                    <ProfileBadge name={reply.user} status={reply.status} viewStatus={false} />
                                </header>
                                <div>
                                    <span>
                                        {reply.reply}
                                    </span>
                                </div>
                                <div className={styles.engagement}>
                                    <Button title='curtir' variation={4} />
                                    <Button title='responder' variation={4} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    </div>
}