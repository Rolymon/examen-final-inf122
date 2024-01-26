import Image from "next/image";
import styles from "./page.module.css";
import Pokemon from "./componentes/Pokemon"
export default function Home() {
  return (
    <div className={styles.container}>
        <h1>my pokemon</h1>
          <Pokemon/>
    </div>
    
  );
}
