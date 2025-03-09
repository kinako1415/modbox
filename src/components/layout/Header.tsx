"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <motion.div
        animate={isOpen ? { opacity: 1 } : { opacity: 0, display: "none" }}
        className={styles.hamburgerBackGround}
      ></motion.div>
      <div className={styles.container}>
        <div className={styles.logo}>MODBOX</div>
        <motion.ol
          variants={container}
          initial="hidden"
          animate="show"
          className={styles.rightContainer}
        >
          <motion.button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={styles.hamburgerLineContainer}
          >
            <motion.div
              initial={{ opacity: 0, y: "20px" }}
              animate={
                isOpen
                  ? {
                      opacity: 1,
                      y: 12,
                      rotate: "45deg",
                      backgroundColor: "#5D2800",
                    }
                  : { opacity: 1, y: 4 }
              }
              className={styles.hamburgerLine}
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: "20px" }}
              animate={isOpen ? { opacity: 0, y: 4 } : { y: 4, opacity: 1 }}
              className={styles.hamburgerLine}
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: "20px" }}
              animate={
                isOpen
                  ? {
                      opacity: 1,
                      y: -4,
                      rotate: "-45deg",
                      backgroundColor: "#5D2800",
                    }
                  : { opacity: 1, y: 4 }
              }
              className={styles.hamburgerLine}
            ></motion.div>
          </motion.button>

          {isOpen ? (
            <>
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
            </>
          ) : (
            <></>
          )}

          <div className={styles.wideScreenMenu}>
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
          </div>
        </motion.ol>
      </div>
    </>
  );
};

export default Header;
