import styles from "./Nav.module.css";
import Link from "next/link";
import { useState, useEffect, useRef, useContext } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React from 'react';
import AuthContext from '../../stores/authContext';


function Nav(props) { 
  const [showMobileNav, setShowMobileNav] = useState(false);
  let menuref = useRef();
  const { user, login, logout, authReady } = useContext(AuthContext);

  useEffect(() => {
    let handler = (event) => {
      if (
        showMobileNav &&
        menuref.current &&
        !menuref.current.contains(event.target)
      ) {
        setShowMobileNav(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [showMobileNav]);

  function handleMenuClick() {
    if (!showMobileNav) {
      setShowMobileNav(true);
    } else {
      setShowMobileNav(false);
    }
  }
  return (
    <nav className={styles.navbarcont}>
      <div className={styles.navbar}>
        <div className={styles.leftside}>
          <Link href="/" passHref>
            <div className={styles.logo}>Julie Yudowitch Gardening Blog</div>
          </Link>
          {authReady && user && <p>Welcome {user.email}</p>}
        </div>

        <div className={styles.rightsidecont}>
          <div className={styles.rightside}>
            <div
              className={styles.navbarlinks}
              onClick={handleMenuClick}
              id={showMobileNav ? styles.hidden : ""}
            >
              <div className={styles.hiddenMenu}>
                <div
                  className={styles.mobilemenuicon}
                  onClick={() => setShowMobileNav(!showMobileNav)}
                >
                  <AiOutlineClose color="rgb(198, 235, 248)" />
                </div>
              </div>
              <div>
                <Link
                  href="/"
                  ref={menuref}
                  passHref
                  className={styles.navlink}
                >
                  <p className={styles.navlinkname}>HOME</p>
                </Link>
              </div>

              {authReady && (
                <div>
                  <div>
                    <Link
                      href="/blogs"
                      ref={menuref}
                      passHref
                      className={styles.navlink}
                    >
                      <p className={styles.navlinkname}>BLOGS</p>
                    </Link>
                  </div>
                  {!user && (
                    <div>
                      <p className={styles.navlinkname} onClick={login}>
                        LOG IN
                      </p>
                    </div>
                  )}
                  {user && (
                    <div>
                      <p className={styles.navlinkname} onClick={logout}>
                        LOGOUT
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div
                className={styles.mobilemenuicon}
                onClick={() => setShowMobileNav(!showMobileNav)}
              >
                <AiOutlineMenu color="rgb(198, 235, 248)" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
