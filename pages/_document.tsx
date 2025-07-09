import * as React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { Server } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import styletron from '../lib/styletron';

class MyDocument extends Document<{ stylesheets: Array<{ css: string; attrs: { media: string; 'data-hydrate': string } }> }> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & { stylesheets: any[] }> {
    const page = await ctx.renderPage({
      enhanceApp: (App: any) => function EnhanceApp(props: any) {
        return (
          <StyletronProvider value={styletron}>
            <App {...props} />
          </StyletronProvider>
        );
      },
    });

    const initialProps = await Document.getInitialProps(ctx);
    const stylesheets = (styletron as Server).getStylesheets() || [];

    return {
      ...initialProps,
      ...page,
      stylesheets,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {(this.props as any).stylesheets.map((sheet: any, index: number) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={index}
            />
          ))}
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
