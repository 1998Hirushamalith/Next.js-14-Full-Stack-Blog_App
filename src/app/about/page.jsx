import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
    title: "About Page",
    description: "About description",
  };

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>
                We create digital ideas that are bigger, bolder, braver and better.
                </h1>
                <p className={styles.description}>
                    We create digital ideas that are bigger, bolder, braver and better. We
                    believe in good ideas flexibility and precission We’re world’s Our
                    Special Team best consulting & finance solution provider. Wide range
                    of web and software development services.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experiance</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experiance</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experiance</p>
                    </div>
                </div>
            </div>
            {/* <Image src="/about.png" alt="" width={500} height={500} /> */}

            <div className={styles.imgContainer}>
                {/* <Image src="https://images.pexels.com/photos/19820297/pexels-photo-19820297/free-photo-of-a-street-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill/> */}
                <Image 
                src="/about.png" 
                alt="About Image" 
                fill 
                className={styles.img} />
            </div>
        </div>
    )
}
export default AboutPage