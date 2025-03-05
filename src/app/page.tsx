import About from "./../components/home/About";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src="/cafe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.filter}></div>
      <div className={styles.title}>
        <h1>
          スタイリッシュに、自由に。
          <br />
          コンテナで作る新しい暮らし。
        </h1>
        <h3>Stylish and free. A new way of living with containers.</h3>
      </div>
      <About />
    </div>
  );
}
