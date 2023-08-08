import Document, {
  Html,
  Head,
  Main,
  NextScript,
  // DocumentContext,
  // DocumentInitialProps,
} from "next/document";
const { i18n } = require('../../next-i18next.config.js')

export default class MyDocument extends Document {
  // static override async getInitialProps(
  //   ctx: DocumentContext
  // ): Promise<DocumentInitialProps> {
  //   const originalRenderPage = ctx.renderPage;

  //   try {
  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         enhanceApp: (App) => (props) => <App {...props} />,
  //       });

  //     const initialProps = await Document.getInitialProps(ctx);
  //     return {
  //       ...initialProps,
  //       styles: <>{initialProps.styles}</>,
  //     };
  //   } finally {
  //   }
  // }

  override render() {
    const currentLocale =
    this.props.__NEXT_DATA__.query["locale"] ||
      i18n.defaultLocale
    return (
      <Html lang={currentLocale}>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600"
          rel="stylesheet"
        />
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}