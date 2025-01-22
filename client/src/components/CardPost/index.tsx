import styles from './styles.module.css'
import { ProfileBadge } from '../ProfleBadge'
import { LikeButton } from '../Buttons/LikeButton';

import { Comment } from '../Comments';
import { PostsProps } from '../../types/Post';
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'


type contentProps = {
    posts: PostsProps[]
}

export function CardPost({ posts }: contentProps) {

    function dateFormat(date: string) {
        const dateTimeConvert = new Date(date)
        return formatDistanceToNow(dateTimeConvert, {
            locale: ptBR,
            addSuffix: true
        })
    }
    return (
        posts.map((post) => (
            <div className={styles.cardPost} key={post.id}>
                <div className={styles.post}>
                    <header>
                        <ProfileBadge name={`${post.user?.name} ${post.user?.surname}`} status={post.user.status} />
                        <time dateTime={post.createdAt}>{dateFormat(post.createdAt)}</time>
                    </header>
                    <div className={styles.content}>
                        <span>
                            {post.content}
                        </span>
                        {post.imageUrl && <img src={post.imageUrl} />}
                    </div>
                    <div className={styles.engagement}>
                        <LikeButton post={post} likeFrom="post"/>
                    </div>
                </div>
                {post.comments && post.comments.length > 0 && <Comment comments={post.comments} />}
            </div>
        )))
}