import type { NextPage } from 'next';
import { FormOrc } from '../components/FormOrc/FormOrc';
import { Layout } from '../components/template/Layout';


const Home: NextPage = () => {


  return (
    <Layout tabTitle='Gerador de orçamento'>
      Homepage
      <FormOrc />
    </Layout>
  );
};

export default Home;
