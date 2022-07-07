import '../styles/globals.css';
import '../styles/antd.less';
import type { AppProps } from 'next/app';
import { FormDataProvider } from '../data/context/FormDataContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FormDataProvider>
        <Component {...pageProps} />
      </FormDataProvider>
    </>
  );
}

export default MyApp;
