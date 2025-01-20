export interface PostsProps {
    id: number
    user: userProps
    publishedAt: string
    content: string
    image?: string
    comments?: CommentProps[] | undefined
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