import { Link } from "react-router-dom";
import Search from "../components/Search";
import styles from "../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.col} ${styles.brand}`}>
        <Link className={styles.logoWrapper} to="/">
          <img
            className={styles.logo}
            src="/MECAZON_logo.svg"
            alt="mecazon logo"
            height="35px"
            width="35px"
          />
          <p>EMPLOYEE HUB</p>
        </Link>
      </div>

      <div className={styles.info}>
        <p>Employee Info</p>
        <p>Customer Info</p>
      </div>

      {/* <div className={styles.col}>
        <Link to="/groceries">
          <Search></Search>
        </Link>
      </div> */}

      <div className={`${styles.col} ${styles.userButtons}`}>
        <Link className={styles.loginLink} to="/login">
          <p>Sign in</p>

          <img
            src="/account_icon.svg"
            height="30px"
            width="30px"
            alt="user account icon"
          />
        </Link>
      </div>
    </nav>
  );
}
