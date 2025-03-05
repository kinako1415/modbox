import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src="/cafe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div></div>
    </div>
  );
}
