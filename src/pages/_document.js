import Document, { Head, Html, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>
            This app uses JavaScript to run. Please consider enabling
            JavaScript.
          </noscript>
        </body>
      </Html>
    )
  }
}
