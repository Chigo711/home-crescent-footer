import Image from "next/image";
// import styles from "./page.module.css";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import * as FaIcons from "react-icons/fa";

export default function Home() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerDescription}>
          <h3 className={styles.logo}>LOGO goes here</h3>

          <p>
            Take a deep dive and browse homes for sale, original
            <br /> neighborhood, resident reviews and local insights
            <br /> to find what is right for you.
          </p>

          <div>
            <h3 className={styles.listHeader}>Follow Us</h3>
            <div className={styles.icons}>
              <Link href="/facebook" className={styles.icon}>
                <FaIcons.FaFacebookSquare />
              </Link>
              <Link href="/instagram" className={styles.icon}>
                <FaIcons.FaInstagram />
              </Link>
              <Link href="/linkedin" className={styles.icon}>
                <FaIcons.FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footerList}>
          <List>
            <h3 className={styles.listHeader}>Company</h3>
            <li>
              <Link href="/about" legacyBehavior>
                <a className={styles.link}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/blog" legacyBehavior>
                <a className={styles.link}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/faq" legacyBehavior>
                <a className={styles.link}>Faq</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className={styles.link}>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/partner" legacyBehavior>
                <a className={styles.link}>Become a partner</a>
              </Link>
            </li>
          </List>
          <List>
            <h3 className={styles.listHeader}>Services</h3>
            <li>
              <Link href="/buy" legacyBehavior>
                <a className={styles.link}>Buy a home</a>
              </Link>
            </li>
            <li>
              <Link href="/save" legacyBehavior>
                <a className={styles.link}>Save equity</a>
              </Link>
            </li>
            <li>
              <Link href="/rent" legacyBehavior>
                <a className={styles.link}>Rent as you stay</a>
              </Link>
            </li>
            <li>
              <Link href="/pre-qualified" legacyBehavior>
                <a className={styles.link}>Get Pre-qualified</a>
              </Link>
            </li>
          </List>
          <List>
            <h3 className={styles.listHeader}>Top Cities</h3>
            <li>
              <Link href="/lagos" legacyBehavior>
                <a className={styles.link}>Lagos</a>
              </Link>
            </li>
            <li>
              <Link href="/abuja" legacyBehavior>
                <a className={styles.link}>Abuja</a>
              </Link>
            </li>
            <li>
              <Link href="/port-harcourt" legacyBehavior>
                <a className={styles.link}>Port-harcourt</a>
              </Link>
            </li>
            <li>
              <Link href="/asaba" legacyBehavior>
                <a className={styles.link}>Asaba</a>
              </Link>
            </li>
          </List>
        </div>
      </div>
    </footer>
  );
}

function List({ children }) {
  return <ul className={styles.list}>{children}</ul>;
}

// className={styles.main}
// className={styles.description}
