/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";



export default function Home(props) {

  return (
    <div id="pageTop">
      <Head>
        <meta property="og:title" content="Julie Yudowitch Garden Blog" />
        <meta property="og:image" content="./rose.webp" />
        <meta
          property="og:description"
          content="Pictures and stories about my garden"
        />
        <meta
          property="og:url"
          content="https://julieyudowitchgardenblog.netlify.app/"
        />
        <meta property="og:image:width" content="155" />
        <meta property="og:image:height" content="206" />
        <meta property="og:image:alt" content="" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="./rose.webp" />
        <meta name="twitter:title" content="Julie Yudowitch Garden Blog" />
        <meta
          name="twitter:description"
          content="Pictures and stories about my garden"
        />
        <meta name="twitter:image" content="/rose.webp" />
        <meta name="description" content="Julie Yudowitch Garden Blog" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <title>Julie Yudowitch Garden Blog</title>
      </Head>
      <Nav />
      <div className={styles.homePage}>
        <Image
          src="/rose.webp"
          alt=""
          width="155"
          height="206"
          placeholder="blur"
          blurDataURL="/bags.webp"
        />
        <p>Hello World</p>
      </div>

      <Footer />
    </div>
  );
}
