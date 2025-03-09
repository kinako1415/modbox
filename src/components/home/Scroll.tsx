"use client";
import { motion } from "framer-motion";
import styles from "./Scroll.module.scss";
import Image from "next/image";

const Scroll = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: [0, 0.8, 0.9, 1] }}
        className={styles.line}
      ></motion.div>
      <div className={styles.arrowContainer}>
        <Image
          src="https://api.iconify.design/heroicons:arrow-down-20-solid.svg?color=%23ffffff"
          alt="icon"
          width={20}
          height={20}
          className={styles.arrow}
        />
      </div>
    </div>
  );
};

export default Scroll;
