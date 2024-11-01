import BlogPost from "./BlogPost"
export default function Article({ articles }) {
  return (
    <div className="blogPosts">
      {articles.map((article) =>(
        <BlogPost post={article} />
      ))}
    </div>
  )
}
