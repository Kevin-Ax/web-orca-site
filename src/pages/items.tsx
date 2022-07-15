import type { NextPage } from 'next';
import { FormOrc } from '../components/FormOrc/FormOrc';
import { Layout } from '../components/template/Layout';
import { useFormData } from '../data/hooks/useFormData';


const Home: NextPage = () => {

  const { items } = useFormData();
  const formTitle = "Preencha os campos abaixo de acordo com seu desejo:";


  return (
    <Layout tabTitle='Gerador de orçamento'>
      <div className='flex flex-grow w-full justify-center py-5'>
        <FormOrc items={items} title={formTitle} />
      </div>
    </Layout>
  );
};

export default Home;
