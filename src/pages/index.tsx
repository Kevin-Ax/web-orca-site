import type { NextPage } from 'next';
import { FormOrc } from '../components/FormOrc/FormOrc';
import { Layout } from '../components/template/Layout';
import { useFormData } from '../data/hooks/useFormData';


const Home: NextPage = () => {

  return (
    <Layout tabTitle='Gerador de orçamento'>
      <div>
        <FormOrc />
      </div>
    </Layout>
  );
};

export default Home;
