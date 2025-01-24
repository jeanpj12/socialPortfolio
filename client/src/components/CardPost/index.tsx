import styles from './styles.module.css'
import { ProfileBadge } from '../ProfleBadge'
import { LikeButton } from '../Buttons/LikeButton';
import { CommentButton } from '../Buttons/CommentButton';
import { FormComment } from '../FormComment';
import { Comment } from '../Comments';
import { PostsProps } from '../../types/Post';
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useState } from 'react';
import { useUser } from '../../contexts/UserContext';

type contentProps = {
    posts: PostsProps[]
}

export function CardPost({ posts }: contentProps) {

    const { user } = useUser()

    const [showCommnet, setShowComment] = useState(false)

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

    return (
        posts.map((post) => (
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
                        {user?.role === 'admin' && <CommentButton onClick={() => setShowComment((prev) => !prev)}/>}
                    </div>
                    {showCommnet && <FormComment />}
                </div>
                {post.comments && post.comments.length > 0 && <Comment comments={post.comments} />}
            </div>
        )))
}