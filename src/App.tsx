import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/tiagoaraujodev.png",
      name: "Tiago Araujo",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-10-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/marynepatricia.png",
      name: "Maryne Patricia",
      role: "Data scientist",
    },
    content: [
      { type: "paragraph", content: "Olà estimados 👋" },
      {
        type: "paragraph",
        content:
          "Venho aqui falar de maneira bem clara e sucinta que sou realmente muito linda e incrivel!",
      },
      { type: "link", content: "#souFoda" },
    ],
    publishedAt: new Date("2022-11-03 17:37:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
