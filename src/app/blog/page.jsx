import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

// Data fetching
// by using cashe command {cache: "no-store"} we can see each time fresh data or if you have any data on your database
// that is changing constantlly it's better to use {next:{revalidate:3600}} bcz if you have blog website (once a week)
// FETCH DATA WITH AN API
const getData = async ()=>{
    const res = await fetch ("http://localhost:3000/api/blog" , {next:{revalidate:3600}});

    if(!res.ok){
        throw new Error("Something went wrong")
    }

    return res.json();
};

const BlogPage = async () => {
    //links , use router , use params , params page
    // console.log(searchParams)
    
    // FETCH DATA WITH AN API
    const posts = await getData();

    // FETCH DATA WITHOUT AN API
    // const posts = await getPosts();

    return (
        <div className={styles.container}>
            {posts.map((post) => (
        <div className={styles.post} key={post.id}>
        <PostCard post={post}/>
        </div>
            ))}
        </div>
    );
};
export default BlogPage;