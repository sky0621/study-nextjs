import styles from "./page.module.css";
import { Heading } from "shared/src/components/Heading";

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading level={1}>見出し</Heading>
    </main>
  );
}
