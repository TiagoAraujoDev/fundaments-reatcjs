import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/tiagoaraujodev.png" alt="Profile picture" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tiago Araujo</strong>
              <time title="11 de Dezembro às 20:02" dateTime="2022-11-12 20:02">Cerca de 2h</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Tiago, você é incrivel cara!</p>
        </div>
        <footer>
          <ThumbsUp />
          Aplaudir<span>03</span>
        </footer>
      </div>
    </div>
  );
}
