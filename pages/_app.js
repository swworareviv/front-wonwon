import '../styles/globals.css';
import '../components/modal/modal.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // 👈
config.autoAddCss = false; // 👈

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
