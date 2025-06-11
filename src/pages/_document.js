import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* 파비콘 */}
        <link rel="icon" href="/favicon.ico" />

        {/* 반응형 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO (검색엔진 최적화용) */}
        <meta
          name="description"
          content="FrontEnd Developer 김민준 포트폴리오입니다."
        />
        <meta name="author" content="김민준" />
        <meta
          name="keywords"
          content="Frontend, 포트폴리오, React, Next.js, 김민준"
        />

        {/* Open Graph (SNS 공유용) */}
        <meta property="og:title" content="MJ` Portfolio" />
        <meta
          property="og:description"
          content="FrontEnd Developer 김민준 포트폴리오입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
