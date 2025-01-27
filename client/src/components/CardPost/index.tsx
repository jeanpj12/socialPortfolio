import styles from './styles.module.css'
import { ProfileBadge } from '../ProfleBadge'
import { LikeButton } from '../Buttons/LikeButton';
import { CommentButton } from '../Buttons/CommentButton';
import { FormComment } from '../FormComment';
import { Comment } from '../Comments';
import { CommentProps, PostsProps } from '../../types/Post';
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import { API } from '../../services/APIService';

type contentProps = {
    post: PostsProps
}

export function CardPost({ post }: contentProps) {

    const { user } = useUser()

    const [showCommnet, setShowComment] = useState(false)
    const [comments, setComments] = useState<CommentProps[]>()
    const [reloadComments, setReloadComments] = useState(false)

    function dateFormat(date: string) {
        const dateTimeConvert = new Date(date)
        return formatDistanceToNow(dateTimeConvert, {
            locale: ptBR,
            addSuffix: true
        })
    }

    const avatar = (post: PostsProps) => {
        if (post.user.avatar) {
            return process.env.BACKEND_URL + '/upload/' + post.user.avatar.split('/').pop()
        }

        return undefined
    }

    const getComments = async () => {
        try {
            const response = await API.get(`/comment/${post.id}`,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            setComments(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getComments()
        setReloadComments(false)
    }, [reloadComments])

    useEffect(() => {
        getComments()
    }, [post])

    return (
        <div className={styles.cardPost} key={post.id}>
            <div className={styles.post}>
                <header>
                    <ProfileBadge img={avatar(post)} name={`${post.user?.name} ${post.user?.surname}`} status={post.user.status} />
                    <time dateTime={post.createdAt}>{dateFormat(post.createdAt)}</time>
                </header>
                <div className={styles.content}>
                    <span>
                        {post.content}
                    </span>
                    {post.imageUrl && <img src={post.imageUrl} />}
                </div>
                <div className={styles.engagement}>
                    <LikeButton post={post} likeFrom="post" />
                    {user?.role === 'admin' && <CommentButton onClick={() => setShowComment((prev) => !prev)} />}
                </div>
                {showCommnet && <FormComment post_id={post.id} setReloadComments={setReloadComments} setShowComments={setShowComment} />}
            </div>
            {comments?.map((comment) =>
            (
                <Comment comment={comment} key={comment.id} />
            )
            )
            }
        </div>
    )
}