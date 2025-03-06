"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        ease: [0, 0.64, 0.86, 1],
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: "20px" },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>MODBOX</div>
      <motion.ol
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.rightContainer}
      >
        <motion.li variants={item}>
          <Link href="/">ラインナップ</Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href="/">オプション</Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href="/">運搬・設置について</Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href="/">お問い合わせ</Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href="/">施工事例</Link>
        </motion.li>
      </motion.ol>
    </div>
  );
};

export default Header;
