import { getPosts } from '@/lib/data';
import styles from './adminPosts.module.css';
import Image from 'next/image';
import { deletePost } from '@/lib/action';

const AdminPosts = async () => {

    const posts = await getPosts();

    // const deletePostWithId = async ()=>{
    //     "use server";
    //     return deletePost.bind(null,id);
    // };

    return (
        <div className={styles.container}>
            <h1>Posts</h1>
            {posts.map(post=>(
                <div className={styles.post} key={post.id} >
                    <div className={styles.detail}>
                        <Image 
                        src={post.img || "/noavatar.png"} 
                        alt="" 
                        width={50} 
                        height={50} />
                        <span className={styles.postTitle}>{post.title}</span>
                    </div>
                    {/* <form action={deletePostWithId}> */}
                    <form action={deletePost}>
                    <input type="hidden" name="id" value={post.id} />
                        <button className={styles.postButton} >Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default AdminPosts;


// import { useState, useEffect } from 'react';
// import styles from './adminPosts.module.css';
// import Image from 'next/image';
// import { getPosts } from '@/lib/data';
// import { deletePost } from '@/lib/action';


// const AdminPosts = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             const fetchedPosts = await getPosts();
//             setPosts(fetchedPosts);
//         };
//         fetchPosts();
//     }, []);

//     const handleDeletePost = async (id) => {
//         await deletePost(id);
//         // After deletion, you might want to refresh the posts list by refetching data
//         const updatedPosts = await getPosts();
//         setPosts(updatedPosts);
//     };

//     return (
//         <div className={styles.container}>
//             <h1>Posts</h1>
//             {posts.map(post => (
//                 <div className={styles.post} key={post.id}>
//                     <div className={styles.detail}>
//                         <Image 
//                             src={post.img || "/noavatar.png"} 
//                             alt="" 
//                             width={50} 
//                             height={50} 
//                         />
//                         <span className={styles.postTitle}>{post.title}</span>
//                     </div>
//                     <form onSubmit={(e) => {
//                         e.preventDefault();
//                         handleDeletePost(post.id);
//                     }}>
//                         <button className={styles.postButton}>Delete</button>
//                     </form>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default AdminPosts;