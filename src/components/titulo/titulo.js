import styles from "./titulo.module.css";
import Image from "next/image";

export default function Titulo() {
  return (
    <>
      <div className={styles.center}>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <h1>Módulo dos</h1>
      </div>
    </>
  );
}
