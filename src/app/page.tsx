"use client";
import { motion, useScroll } from "framer-motion";
import About from "./../components/home/About";
import styles from "./page.module.scss";
import Scroll from "@/components/home/Scroll";
import { useRef } from "react";
export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const InView = {
    hidden: { y: "20px", opacity: 0 },
    visible: { y: "0px", opacity: 1 },
  };

  console.log(scrollYProgress);

  return (
    <motion.div>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src="/cafe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.filter}></div>

      <div className={styles.titleContainer}>
        <motion.div
          variants={InView}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.6, ease: [0, 0.64, 0.86, 1] }}
          className={styles.title}
        >
          スタイリッシュに、自由に。
          <br />
          コンテナで作る新しい暮らし。
        </motion.div>
        <motion.div
          variants={InView}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.6, ease: [0, 0.64, 0.86, 1] }}
          className={styles.subTitle}
        >
          Stylish and free. A new way of living with containers.
        </motion.div>
        <Scroll />
      </div>
      <About />
    </motion.div>
  );
}
