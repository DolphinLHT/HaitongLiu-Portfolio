import '@/styles/globals.css';
import Layout from '../components/layout';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-1BPH3ZY24T`} />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1BPH3ZY24T', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}