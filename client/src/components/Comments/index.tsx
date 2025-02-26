import styles from "./styles.module.css";
import { ProfileBadge } from "../ProfleBadge";
import { LikeButton } from "../Buttons/LikeButton";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { CommentProps } from "../../types/Post";

export type CommentsProps = {
  comment: CommentProps;
};

export function Comment({ comment }: CommentsProps) {
  function dateFormat(date: string) {
    const dateTimeConvert = new Date(date);
    return formatDistanceToNow(dateTimeConvert, {
      locale: ptBR,
      addSuffix: true,
    });
  }

  const avatar = (comment: CommentProps) => {
    if (comment.user.avatar) {
      return (
        process.env.BACKEND_URL +
        "/uploads/avatar/" +
        comment.user.avatar.split("/").pop()
      );
    }

    return undefined;
  };

  return (
    <div className={styles.comments}>
      <div className={styles.comment} key={comment.id}>
        <div className={styles.cardComment} key={comment.id}>
          <header>
            <ProfileBadge
              img={avatar(comment)}
              name={`${comment.user.name} ${comment.user.surname}`}
              status={comment.user.status}
            />
            <time dateTime={comment.createdAt}>
              {dateFormat(comment.createdAt)}
            </time>
          </header>
          <div>
            <span>{comment.comment}</span>
          </div>
          <div className={styles.engagement}>
            <LikeButton likeFrom="comment" comment={comment} />
          </div>
        </div>
      </div>
    </div>
  );
}
