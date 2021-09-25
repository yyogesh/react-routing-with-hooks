import useFetch from '../hooks/useFetch';
import BlogList from './BlogList';


const Home = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:9001/blogs');

    return <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} />}
    </div>
}

export default Home;

