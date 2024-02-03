import Head from 'next/head';                             // Import the Head component from Next.js, which is used to append elements to the head of the HTML document.
import GlobalStyle from '../components/GlobalStyle.css';  // Import global CSS styles.
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });              // Create a new instance of the Inter font with the latin subset.

export default function App({ Component, pageProps }) {   // Main application component. It receives the current page component and its props as arguments.
  return (
    <>
      <Head>  {/* The Head component is used to add a favicon, load a script for Google Tag Manager, and run a script that initializes Google Tag Manager. */}
        <link rel="icon" href="/favicon.svg" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PR31CLCPW1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PR31CLCPW1');`,
          }}
        />
      </Head>
      <GlobalStyle /> {/* Apply the global CSS styles to the entire document. */}
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
