import { getUsers } from '@/lib/data'
import styles from './adminUsers.module.css'
import Image from 'next/image'
import { deleteUser } from '@/lib/action'

const AdminUsers = async () => {

    const users = await getUsers();

    return (
        <div className={styles.container}>
            <h1>Users</h1>
            {users.map((user)=>(
                <div className={styles.user} key={user.id} >
                    <div className={styles.detail}>
                        <Image 
                        src={user.img || "/noavatar.png"} 
                        alt="" 
                        width={50} 
                        height={50} />
                        <span>{user.username}</span>
                    </div>
                    {/* <form action={deletePostWithId}> */}
                    <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                        <button className={styles.userButton} >Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default AdminUsers;


// import { useState, useEffect } from 'react';
// import styles from './adminUsers.module.css';
// import Image from 'next/image';
// import { getUsers } from '@/lib/data';
// import { deleteUser } from '@/lib/action';

// const AdminUsers = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             const fetchedUsers = await getUsers();
//             setUsers(fetchedUsers);
//         };
//         fetchUsers();
//     }, []);

//     const handleDeleteUser = async (id) => {
//         await deleteUser(id);
//         // After deletion, you might want to refresh the users list by refetching data
//         const updatedUsers = await getUsers();
//         setUsers(updatedUsers);
//     };

//     return (
//         <div className={styles.container}>
//             <h1>Users</h1>
//             {users.map(user => (
//                 <div className={styles.user} key={user.id}>
//                     <div className={styles.detail}>
//                         <Image 
//                             src={user.img || "/noavatar.png"} 
//                             alt="" 
//                             width={50} 
//                             height={50} 
//                         />
//                         <span>{user.username}</span>
//                     </div>
//                     <form onSubmit={(e) => {
//                         e.preventDefault();
//                         handleDeleteUser(user.id);
//                     }}>
//                         <button className={styles.userButton}>Delete</button>
//                     </form>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default AdminUsers;