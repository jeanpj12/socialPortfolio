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

    const avatar = (comment: CommentProps) => {
        if (comment.user.avatar) {
            return process.env.BACKEND_URL + '/upload/' + comment.user.avatar.split('/').pop()
        }

        return undefined
    }


    return <div className={styles.comments}>
        {comments && comments.map((comment) => (
            <div className={styles.comment} key={comment.id}>
                <div className={styles.cardComment} key={comment.id}>
                    <header>
                        <ProfileBadge img={avatar(comment)} name={`${comment.user?.name} ${comment.user?.surname}`} status={comment.user.status} />
                        <time dateTime={comment.createdAt}>{dateFormat(comment.createdAt)}</time>
                    </header>
                    <div>
                        <span>
                            {comment.comment}
                        </span>
                    </div>
                    <div className={styles.engagement}>
                        <LikeButton likeFrom='comment' comment={comment} />
                    </div>
                </div>
                {/* <div className={styles.replies}>
                    {comment.replies && comment.replies.map((reply) => (
                        <div className={styles.cardReply} key={reply.id}>
                            <header>
                                <ProfileBadge name={reply.user.name} status={reply.user.status} />
                                <time dateTime={comment.createdAt}>{dateFormat(comment.createdAt)}</time>
                            </header>
                            <div>
                                <span>
                                    {reply.comment}
                                </span>
                            </div>
                            <div className={styles.engagement}>
                                <LikeButton likeFrom='comment' comment={comment} post_id={comment.id}/>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        ))
        }
    </div>
}