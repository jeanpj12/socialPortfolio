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
                        <ProfileBadge name={post.user.name} status={post.user.status} />
                        <time dateTime={post.publishedAt}>{dateFormat(post.publishedAt)}</time>
                    </header>
                    <div className={styles.content}>
                        <span>
                            {post.content}
                        </span>
                        {post.image && <img src={post.image} />}
                    </div>
                    <div className={styles.engagement}>
                        <LikeButton />
                    </div>
                </div>
                {post.comments && post.comments.length > 0 && <Comment comments={post.comments} />}
            </div>
        )))
}