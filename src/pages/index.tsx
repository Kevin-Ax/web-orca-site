import { Button, Form, Input } from "antd";
import { NextPage } from "next";
import { Layout } from "../components/template/Layout";
import { useOrc } from "../data/hooks/useOrc";
import { usePush } from "../data/hooks/usePush";


const formLayout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 20 },
};

const Home: NextPage = () => {

    const { pushToItemsPage } = usePush();
    const { initializeOrcamento } = useOrc();

    const { TextArea } = Input;

    function handleSubmit(values: Record<string, string>) {
        initializeOrcamento(values.clientName, values.productVision);
        pushToItemsPage();
    }

    return (
        <Layout tabTitle="Identificação">
            <div className="">
                <Form {...formLayout} labelAlign="left" onFinish={handleSubmit}>
                    <Form.Item label="Nome do cliente" name={"clientName"}>
                        <Input type={"text"} />
                    </Form.Item>
                    <Form.Item label="Visão do produto" name={"productVision"}>
                        <TextArea />
                    </Form.Item>
                    <Form.Item label=" " colon={false}>
                        <Button htmlType="submit">
                            Próxima página
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Layout>
    );
};

export default Home;