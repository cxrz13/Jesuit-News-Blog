import { useEffect, useState } from "react"
import Nav from "./Nav"
import Article from "./Article"
import ArticleEntry from "./ArticleEntry"
import News from "./News"
import { SignIn, SignOut } from "./Auth"
import { useAuthentication } from "../services/authService"
import { fetchArticles, createArticle } from "../services/articleService"
import "./App.css"

export default function Blog() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const user = useAuthentication()
  const articleList = []

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article)
      setArticles([article, ...articles])
      setWriting(false)
    })
  }
  console.log(articles)
  articles.map((art) => articleList.push(<Article article={art} />))
  return (
    <div className="Blog">
      <header>
        <section className="title">
          <img src="/public/jesuits-logo2.svg" />
          <h3>Global Jesuit News </h3>
          <section className="auth">
          {!user ? <SignIn /> : <SignOut />}
        </section>
        </section>
      </header>

      {user && <button className="new-article" onClick={() => setWriting(true)}><img alt="new article"className="plus"src="../public/plus.svg" /> <h5>New Article </h5></button>}

      {!user ? (
        <News user={user}/>
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : <Article articles={articles} />
    }
    </div>
  )
}
