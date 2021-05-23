import {useEffect, useState} from 'react'
import './home.css'
import Pagination from '../components/pagination/Pagination';
import Card from '../components/card/Card';

export default function Home({match}) {
    const pageNumber = match.params.pageNumber || 1

    const[posts, setPosts] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] =useState(false);
    const[page, setPage] = useState(pageNumber);
    const[pages, setPages] = useState(1);
    useEffect(() => {
        const fetchposts = async() =>{
        setLoading(true)
        try {
            const res = await fetch(`/api/posts?page=${page}`)
            const {data, pages:totalPages} = await res.json();
            setPages(totalPages)
            setPosts(data)
            setLoading(false) 
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError('Some error occured while loading from server')
        }
        }
        fetchposts()
    }, [page])


    return (
        <div className="home">
            {loading ? (
                <h3 className="loading-text">Loading...</h3>
            ) : error ? (
                <h3 className="error-text">{error}</h3>
            ) : (
                <>
                <Pagination page={page} pages={pages} changePage={setPage} />
                <div className="home-post">
                    {posts.map((post) => (
                    <Card key={post._id} post={post} />
                    ))}
                </div>
                <Pagination page={page} pages={pages} changePage={setPage} />
                </>
            )}
        </div>
    )
}
