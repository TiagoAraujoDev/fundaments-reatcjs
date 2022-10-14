import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Post muito legal!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const isCommentInputEmpty = newCommentText.length === 0;

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBr,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentTyping(event) {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeleteOne);
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.profile}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.profileInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormatted}
          className={styles.postStatus}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          return line.type === "paragraph" ? (
            <p key={line.content}>{line.content}</p>
          ) : (
            <p key={line.content}>
              <a href="#">{line.content}</a>
            </p>
          );
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe seu comentário..."
          value={newCommentText}
          onChange={handleNewCommentTyping}
        />
        <footer>
          <button disabled={isCommentInputEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
