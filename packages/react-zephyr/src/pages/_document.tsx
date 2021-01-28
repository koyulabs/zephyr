import Document, { Html, Head, Main, NextScript } from "next/document";
import { tw } from "twind";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html className={tw`h-full`}>
        <Head />
        <body className={tw`h-full`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
