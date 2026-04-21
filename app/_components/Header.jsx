import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={'/'} className={styles.logo}>
        <img src="/pizza-logo.jpg" alt="logo" />
        Pizza Italy
      </Link>
    </header>
  )
}