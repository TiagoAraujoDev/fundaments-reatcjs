import styles from "./Post.module.css";
export function Post() {
  return (
    <div className={styles.post}>
      <header className={styles.header}>
        <div className={styles.profile}>
          <img src="https://github.com/tiagoaraujodev.png" alt="User Picture" />
          <div className={styles.profileInfo}>
            <strong>Tiago Araujo</strong>
            <span>Web developer</span>
          </div>
        </div>
        <div className={styles.postStatus}>Publicado há 1h</div>
      </header>
    </div>
  );
}
