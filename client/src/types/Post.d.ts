export interface PostsProps {
    id: string
    user: userProps
    createdAt: string
    content: string
    imageUrl?: string
    comments?: CommentProps[] | undefined
    typePost: string
    Like: likeProps[]
}

type likeProps = {
    id: string
    userId: string
}

type RepliesProps = {
    id: string
    user: userProps
    comment: string
    createdAt: string
    Like: likeProps[]
}

type CommentProps = {
    id: string
    user: userProps
    comment: string
    createdAt: string
    replies?: RepliesProps[]
    Like: likeProps[]
}

type userProps = {
    name: string
    surname: string
    status: string
}