import React, { useState } from "react";
import styles from './sytles.module.css'
import Cookies from "universal-cookie";
import { API } from "../../../services/APIService";
import { CommentProps, PostsProps } from "../../../types/Post";

type ButtonProps = React.ComponentProps<'button'> & {
    post?: PostsProps
    comment?: CommentProps
    likeFrom: 'post' | 'comment'
}

export function LikeButton({ comment, post, likeFrom, ...rest }: ButtonProps) {


    const cookie = new Cookies()
    const user_id = cookie.get('user_id')
    const postLikeObject = post?.Like?.find((user) => user.userId === user_id)
    const commentLikeObject = comment?.Like?.find((user) => user.userId === user_id)
    const [like, setLike] = useState<boolean>(Boolean(postLikeObject || commentLikeObject))

    async function handleLike() {
        const likeBodyDelete = likeFrom === 'post'
            ? {
                likeId: postLikeObject?.id,
                userId: user_id
            } : likeFrom === 'comment'
                ? {
                    likeId: commentLikeObject?.id,
                    userId: user_id
                }
                : null

        const likeBodyAdd = likeFrom === 'post'
            ? {
                postId: post?.id,
                userId: user_id
            } : likeFrom === 'comment'
                ? {
                    commentId: comment?.id,
                    userId: user_id
                }
                : null

        if (!likeBodyDelete) {
            console.error('likeBodyDelete is null')
            return
        }

        if (!likeBodyAdd) {
            console.error('likeBodyAdd is null');
            return;
        }

        try {
            if (like) {
                const likeResponse = await API.delete('/like/delete', {
                    data: likeBodyDelete
                })

                if (likeResponse.status === 200) {
                    setLike(false)

                    if (likeFrom === 'post' && post) {
                        post.Like = post.Like?.filter((like) => like.userId !== user_id);
                    } else if (likeFrom === 'comment' && comment) {
                        comment.Like = comment.Like?.filter((like) => like.userId !== user_id);
                    }

                }
            } else {
                const likeResponse = await API.post('/like', likeBodyAdd)
                if (likeResponse.status === 201) {
                    setLike(true)

                    if (likeFrom === 'post' && post) {
                        post.Like = [...(post.Like || []), { userId: user_id, id: likeResponse.data.id }];
                    } else if (likeFrom === 'comment' && comment) {
                        comment.Like = [...(comment.Like || []), { userId: user_id, id: likeResponse.data.id }];
                    }

                }
            }
        } catch (err) {
            console.error('Erro ao curtir', err)
        }
    }

    return <div className={styles.likeContainer}>
        <span className={styles.likeCount}>
            {likeFrom === 'post' ? post?.Like?.length : comment?.Like?.length}
        </span>
        <button
            {...rest}
            className={`
        ${styles.button}
        ${like ? styles.liked : ''}
        `}
            onClick={handleLike}>
            <div className={styles.like}></div>
            curtir
        </button>
    </div>

}