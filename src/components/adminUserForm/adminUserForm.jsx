"use client";

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import {useFormState} from "react-dom";

const AdminUserForm = () => {

    const [state,formAction] = useFormState(addUser,undefined);
    
    return (
        < form action={formAction} className={styles.container}>
            <h1>Add New User</h1>
            <input type="text" name="username" placeholder="username" />
            <input type="text" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <input type="text" name="img" placeholder="img" />
            <select name="isAdmin">
                <option value="false">Is Admin?</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select>
            <button>Add</button>
            {state && state.error}
        </form>
    );
};

export default AdminUserForm;


// "use client";

// import { addUser } from "@/lib/action";
// import styles from "./adminUserForm.module.css";
// import { useFormState } from "react-dom"; // Update the import path accordingly

// const AdminUserForm = () => {
//     const [state, formAction] = useFormState(addUser, undefined);
    
//     return (
//         <form onSubmit={formAction} className={styles.container}>
//             <h1>Add New User</h1>
//             <input type="text" name="username" placeholder="username" />
//             <input type="text" name="email" placeholder="email" />
//             <input type="password" name="password" placeholder="password" />
//             <input type="text" name="img" placeholder="img" />
//             <select name="isAdmin">
//                 <option value="false">Is Admin?</option>
//                 <option value="false">No</option>
//                 <option value="true">Yes</option>
//             </select>
//             <button type="submit">Add</button>
//             {state && state.error}
//         </form>
//     );
// };

// export default AdminUserForm;