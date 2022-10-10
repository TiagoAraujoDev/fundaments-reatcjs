import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.profile}>
          <img src="https://github.com/tiagoaraujodev.png" alt="User Picture" />
          <div className={styles.profileInfo}>
            <strong>Tiago Araujo</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time
          dateTime="2022-05-11 08:13:30"
          title="11 de novembro às 08:13"
          className={styles.postStatus}
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉<a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  );
}
