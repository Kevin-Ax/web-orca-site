import '../styles/globals.css';
import '../styles/antd.less';
import type { AppProps } from 'next/app';
import { FormDataProvider } from '../data/context/FormDataContext';
import { OrcProvider } from '../data/context/OrcContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <OrcProvider>
        <FormDataProvider>
          <Component {...pageProps} />
        </FormDataProvider>
      </OrcProvider>
    </>
  );
}

export default MyApp;
