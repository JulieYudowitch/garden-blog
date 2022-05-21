/* eslint-disable react/no-unescaped-entities */
import Head from "next/dist/shared/lib/head";
import styles from "../styles/Blogs.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

function About(props) {
  
  return (
    <div className={styles.aboutPage} id="aboutPageTop">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="blog entries" />
        <title>Blog Entries</title>
      </Head>
      <Nav />
  
      <Footer />
    </div>
  );
}

export default About;
