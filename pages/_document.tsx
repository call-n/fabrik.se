import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        <meta charSet="utf-8" />
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link href="/static/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/static/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/static/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <meta content="#021222" name="theme-color" />
        {['DMSans-Regular', 'WorkSans-Regular'].map((font) => (
          <link
            key={font}
            rel="preload"
            href={`/fonts/${font}.ttf`}
            as="font"
            type="font/ttf"
            crossOrigin=""
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
