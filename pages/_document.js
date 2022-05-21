import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  
  render() {
    
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000000" />
          <meta name="robots" content="index, follow" />
          <link rel="manifest" href="/manifest.json" />
          <meta property="og:image" content="./" />
          <meta property="og:url" content="/INSERT URL HERE" />
          <meta property="og:image:width" content="SSI SIZE" />
          <meta property="og:image:height" content="SSI SIZE" />
          <meta property="og:image:alt" content="" />
          <meta property="og:type" content="website" />
          <meta name="description" content="Julie Yudowitch Garden Blog" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;