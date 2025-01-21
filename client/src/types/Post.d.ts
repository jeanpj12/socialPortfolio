export interface PostsProps {
    id: number
    user: userProps
    createdAt: string
    content: string
    imageUrl?: string
    comments?: CommentProps[] | undefined
}

type RepliesProps = {
    id: number
    user: userProps
    comment: string
    createdAt: string
}

type CommentProps = {
    id: number
    user: userProps
    comment: string
    createdAt: string
    replies?: RepliesProps[]
}

type userProps = {
    name: string
    status: string
}