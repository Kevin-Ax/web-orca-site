import { Button } from "antd";
import { NextPage } from "next";
import { Input } from "../components/template/Input";
import { Layout } from "../components/template/Layout";
import { usePush } from "../data/hooks/usePush";

const Home: NextPage = () => {

    const { pushToItemsPage } = usePush();

    return (
        <Layout tabTitle="Identificação">
            <div className="flex flex-col gap-y-5">
                <Input type={'text'} label="Nome do cliente" />
                <Input type={"text"} label="Visão do produto" />
                <Button onClick={pushToItemsPage}>Próxima pagina</Button>
            </div>
        </Layout>
    );
};

export default Home;