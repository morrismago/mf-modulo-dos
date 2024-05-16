import styles from "./titulo.module.css";
import Image from "next/image";

export default function Titulo({ sessionId }) {

  return (
    <>
      <div className={styles.center}>
        <h1>Módulo dos - sessionId recibido del layout: {sessionId} </h1>
      </div>
    </>
  );
}

