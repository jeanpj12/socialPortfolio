export interface PostsProps {
    id: number
    user: userProps
    publishedAt: string
    content: string
    comments?: CommentProps[]
}

type RepliesProps = {
    id: number
    user: userProps
    comment: string
    publishedAt: string
}

type CommentProps = {
    id: number
    user: userProps
    comment: string
    publishedAt: string
    replies?: RepliesProps[]
}

type userProps = {
    name: string
    status: string
}