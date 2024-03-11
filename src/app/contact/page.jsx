// import HydrationTest from '@/components/hydrationTest';
import dynamic from 'next/dynamic';
import styles from './contact.module.css';
import Image from 'next/image';

// const HydrationTestNoSSR = dynamic (()=>import("@/components/hydrationTest"), {ssr:false})
// this is how we can prevent hydration problem

export const metadata = {
    title: "Contact Page",
    description: "Contact description",
  };

const ContactPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                src="/contact.png" 
                alt="" 
                fill 
                className={styles.img}
                // Add the sizes prop
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 1200px" />
            </div>
            <div className={styles.formContainer}>
            {/* <HydrationTestNoSSR/> */}
                <form action="" className={styles.form}>
                    <input type="text" placeholder='Name and Surname' />
                    <input type="text" placeholder='Email Address' />
                    <input type="text" placeholder='Phone Number (Optional)' />
                    <textarea name="" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    placeholder='Message'>
                    </textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
};
export default ContactPage;