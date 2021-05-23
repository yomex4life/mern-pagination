import './card.css'

export default function Card({post}) {
    return (
        <div className="card">
            <p className="card-title">{post.title}</p>
            <p className="card-author">{post.author}</p>
            <p className="card-body">{post.body}</p>
        </div>
    )
}
