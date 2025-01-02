import styles from './styles.module.css'
import { ProfileBadge } from '../ProfleBadge'
import { LikeButton } from '../Buttons/LikeButton'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { CommentProps } from '../../types/Post'


export type CommentsProps = {
    comments?: CommentProps[]
}

export function Comment({ comments }: CommentsProps) {


    function dateFormat(date: string) {
        const dateTimeConvert = new Date(date)
        return formatDistanceToNow(dateTimeConvert, {
            locale: ptBR,
            addSuffix: true
        })
    }

    return <div className={styles.comments}>
        {comments && comments.map((comment) => (
            <div className={styles.comment} key={comment.id}>
                <div className={styles.cardComment} key={comment.id}>
                    <header>
                        <ProfileBadge name={comment.user.name} status={comment.user.status} viewStatus={false} />
                        <time dateTime={comment.publishedAt}>{dateFormat(comment.publishedAt)}</time>
                    </header>
                    <div>
                        <span>
                            {comment.comment}
                        </span>
                    </div>
                    <div className={styles.engagement}>
                        <LikeButton />
                    </div>
                </div>
                <div className={styles.replies}>
                    {comment.replies && comment.replies.map((reply) => (
                        <div className={styles.cardReply} key={reply.id}>
                            <header>
                                <ProfileBadge name={reply.user.name} status={reply.user.status} viewStatus={false} />
                                <time dateTime={comment.publishedAt}>{dateFormat(comment.publishedAt)}</time>
                            </header>
                            <div>
                                <span>
                                    {reply.comment}
                                </span>
                            </div>
                            <div className={styles.engagement}>
                                <LikeButton />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))
        }
    </div>
}