"use client";
import { motion } from "framer-motion";
import About from "./../components/home/About";
import styles from "./page.module.scss";
import Scroll from "@/components/home/Scroll";
export default function Home() {
  const InView = {
    hidden: { y: "40px", opacity: 0 },
    visible: { y: "0px", opacity: 1 },
  };

  return (
    <div>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src="/cafe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.filter}></div>
      <div className={styles.titleContainer}>
        <motion.div
          variants={InView}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.1 }}
          className={styles.title}
        >
          スタイリッシュに、自由に。
          <br />
          コンテナで作る新しい暮らし。
        </motion.div>
        <motion.div
          variants={InView}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          className={styles.subTitle}
        >
          Stylish and free. A new way of living with containers.
        </motion.div>
        <Scroll />
      </div>
      <About />
    </div>
  );
}
