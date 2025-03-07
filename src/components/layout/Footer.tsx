"use client";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>MODBOX</div>
      <div className={styles.rightContainer}>
        <div>ラインナップ</div>
        <div>オプション</div>
        <div>お問い合わせ・お見積り</div>
        <div>運搬・設置について</div>
        <div>ご購入の流れ</div>
      </div>
    </div>
  );
};

export default Footer;
