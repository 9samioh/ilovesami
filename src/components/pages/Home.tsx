import DateComponent from "../DateComponent/Date";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.bkgd}>
      <div className={styles.date}>
        <DateComponent />
      </div>
    </div>
  );
}

export default Home;
