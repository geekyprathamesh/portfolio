import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gradient-to-tr from-lightblue from-20% via-lightwhite via-35% to-lightblue to-90%">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
