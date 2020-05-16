import Document, { Head, Html, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <style global jsx>
          {`
            *,
            *::before,
            *::after {
              margin: 0;
              padding: 0;
              box-sizing: inherit;
            }

            html {
              box-sizing: border-box;
              font-size: 62.5%;
            }

            body {
              overflow-x: hidden;
              scroll-behavior: smooth;
              font-weight: 300;
              font-family: "Roboto", sans-serif;
              line-height: 1.4;
              height: 100vh;
              min-height: 100vh;
              background: #15202b;
              color: white;
            }
          `}
        </style>

        <Head />
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
