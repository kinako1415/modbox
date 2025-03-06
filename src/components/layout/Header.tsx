import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>MODBOX</div>
      <ul className={styles.rightContainer}>
        <li>
          <Link href="/">ラインナップ</Link>
        </li>
        <li>
          <Link href="/">オプション</Link>
        </li>
        <li>
          <Link href="/">運搬・設置について</Link>
        </li>
        <li>
          <Link href="/">お問い合わせ</Link>
        </li>
        <li>
          <Link href="/">施工事例</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
