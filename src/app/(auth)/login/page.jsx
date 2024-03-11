import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin} from "@/lib/action";
import styles from "./login.module.css";

const LoginPage = () => { // here we don't fetching anything

    // auth?.user?.isAdmin && Router.push("/");

    return (
        <div className={styles.container}>
        <div className={styles.wrapper}>
            {/* git hub login form crreation */}
            <form action={handleGithubLogin}>
                <button className={styles.github}>Login with Github</button>
            </form>
            <LoginForm/>
        </div>
        </div>
    );
};
export default LoginPage;