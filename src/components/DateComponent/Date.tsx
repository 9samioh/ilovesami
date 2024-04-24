import heart from "../images/heart.png";
import styles from "./Date.module.css";

function DateComponent() {
  const firstDate = new Date("10/07/2023");
  const today = new Date();

  const firstDateInMs = firstDate.getTime();
  const todayInMs = today.getTime();

  const differenceBtwDates = todayInMs - firstDateInMs;

  const aDayInMs = 24 * 60 * 60 * 1000;

  const daysDiff = Math.round(differenceBtwDates / aDayInMs);

  return (
    <div>
      <h2>Days Of Our Amazing Beautiful Love</h2>
      <div className={styles.heartdiv}>
        <img src={heart} alt="" className={styles.heart} />
        <h1 className={styles.text}>{daysDiff}</h1>
      </div>
    </div>
  );
}

export default DateComponent;
