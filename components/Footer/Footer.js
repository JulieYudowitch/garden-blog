import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/dist/client/link";


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footContent}>
        <div className={styles.socialLinks}>
          <Link href="/" passHref className={styles.navlink}>
            <FontAwesomeIcon
              className={styles.socialLink}
              color="rgb(227, 238, 242)"
              icon={faFacebook}
              size="2x"
            />
          </Link>
          <Link href="/" passHref className={styles.navlink}>
            <FontAwesomeIcon
              className={styles.socialLink}
              color="rgb(227, 238, 242)"
              icon={faInstagram}
              size="2x"
            />
          </Link>
          <Link href="/" passHref className={styles.navlink}>
            <FontAwesomeIcon
              className={styles.socialLink}
              color="rgb(227, 238, 242)"
              icon={faTwitter}
              size="2x"
            />
          </Link>
        </div>
        <p className={styles.copyright}>
          &copy;{new Date().getFullYear()} JULIE YUDOWITCH | ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}

export default Footer;
