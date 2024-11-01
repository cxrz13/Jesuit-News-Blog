export default function BlogPost({post}){
    const date = post.date.toDate().toString().slice(0,15)
    return (
        <>
        <section className="post">
        <h4>{post.title}</h4>

        <p className="date">{`${date}`}</p>
        <p className="body">{post.body}</p>
        </section>
        </>
    )
}