import Layout from '../components/layouts/Layout'
import '../styles/globals.css'
// import '../components/layouts/Header.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
