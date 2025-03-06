import { motion } from "framer-motion";
import styles from "./About.module.scss";
import Image from "next/image";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 1,
      },
    },
  };

  const item = {
    hidden: { y: "20px", filter: "blur(4px)", opacity: 0 },
    show: {
      y: 0,
      filter: "blur(0px)",
      opacity: 1,
      transition: { ease: [0, 0.64, 0.86, 1] },
    },
  };

  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial="hidden"
      whileInView="show"
      transition={{ ease: [1, 0.2, 0.2, 1] }}
      viewport={{ once: true }}
    >
      <div style={{ overflow: "hidden", position: "relative" }}>
        <motion.div
          className={styles.filter}
          initial={{ x: 0 }}
          whileInView={{ x: "100%" }}
          transition={{ duration: 0.3, ease: [1, 0.2, 0.2, 1], delay: 0.6 }}
          viewport={{ once: true }}
        ></motion.div>
        <Image
          className={styles.image}
          src="/cafeImage.jpg"
          alt="cafe"
          width={300}
          height={300}
        />
      </div>

      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.3, ease: [1, 0.2, 0.2, 1], delay: 0.5 }}
        viewport={{ once: true }}
        className={styles.vLine}
      ></motion.div>

      <div className={styles.rightContainer}>
        <div className={styles.titleContainer}>
          <motion.div variants={item} className={styles.about}>
            about
          </motion.div>
          <motion.div variants={item} className={styles.title}>
            <span className={styles.main}>MODBOX</span>
            <span className={styles.sub}>とは</span>
          </motion.div>
          <motion.div variants={item} className={styles.subTitle}>
            当社は、おしゃれで洗練されたデザイン
          </motion.div>
        </div>

        <motion.div
          className={styles.hLine}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: [1, 0.2, 0.2, 1], delay: 0.5 }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.div variants={item} className={styles.details}>
          当社は、おしゃれで洗練されたデザインのコンテナハウスを提供する企業です。住居やオフィス、店舗など多様な用途に対応し、機能性とデザイン性を兼ね備えた快適な空間を実現します。自由なカスタマイズが可能で、お客様のライフスタイルやビジネスニーズに合わせた最適なプランを提案。環境に配慮した持続可能な設計を採用し、スタイリッシュで心地よい暮らしを提供します。
        </motion.div>
      </div>
      <Image
        className={styles.treeRightImage}
        src="/shadeTreeRight.svg"
        alt="shadeTreeRight"
        width={800}
        height={1330}
      />
      <Image
        className={styles.treeLeftImage}
        src="/shadeTreeLeft.svg"
        alt="shadeTreeRight"
        width={600}
        height={130}
      />
    </motion.div>
  );
};

export default About;
