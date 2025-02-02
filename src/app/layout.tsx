import Head from 'next/head';
import type { Metadata } from 'next';
// import localFont from "next/font/local";

import './globals.css';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: 'CS Hub | 퀴즈로 준비하는 테크 인터뷰',
  description: '퀴즈로 준비하는 테크 인터뷰 - CS Hub',
  icons: {
    icon: '/logo/favicon.svg',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="flex h-full items-center justify-center bg-gray-50">
        {/* 정중앙 고정된 500px 박스 */}
        <div className="h-[100vh] w-full max-w-[500px] bg-white p-4">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
