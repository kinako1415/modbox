import styles from "./About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="/cafeImage.jpg"
        alt="cafe"
        width={300}
        height={300}
      />

      <div className={styles.vLine}></div>

      <div className={styles.rightContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.about}>about</div>
          <div className={styles.title}>
            <span className={styles.main}>MODBOX</span>
            <span className={styles.sub}>とは</span>
          </div>
          <div className={styles.subTitle}>
            当社は、おしゃれで洗練されたデザイン
          </div>
        </div>

        <div className={styles.hLine}></div>

        <div className={styles.details}>
          当社は、おしゃれで洗練されたデザインのコンテナハウスを提供する企業です。住居やオフィス、店舗など多様な用途に対応し、機能性とデザイン性を兼ね備えた快適な空間を実現します。自由なカスタマイズが可能で、お客様のライフスタイルやビジネスニーズに合わせた最適なプランを提案。環境に配慮した持続可能な設計を採用し、スタイリッシュで心地よい暮らしを提供します。
        </div>
      </div>
    </div>
  );
};

export default About;
