/* eslint-disable react/no-unescaped-entities */
import Head from "next/dist/shared/lib/head";
import styles from "../styles/Login.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

function Login(props) {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true);
})
  }
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div id="LoginPageTop">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Garden Blog Login" />
        <title>Login | Garden Blog</title>
      </Head>
      <Nav />
      <div className={styles.loginPage}>
        <h1>Login Page</h1>
        <button onClick={signInWithGoogle}>sign in</button>
        {isAuth && (
          <h2>Welcome</h2>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Login;
