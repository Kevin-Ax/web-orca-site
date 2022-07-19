import { Button, Form, Input } from "antd";
import { NextPage } from "next";
import { Layout } from "../components/template/Layout";
import { useOrc } from "../data/hooks/useOrc";
import { usePush } from "../data/hooks/usePush";


const formLayout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 25 },
};

const Home: NextPage = () => {

    const { pushToItemsPage } = usePush();
    const { initializeOrcamento } = useOrc();

    const { TextArea } = Input;

    function handleSubmit(values: Record<string, string>) {
        initializeOrcamento(values.clientName, values.productVision, values.clientEmail);
        pushToItemsPage();
    }

    return (
        <Layout tabTitle="Identificação">
            <div className="w-1/3">
                <Form {...formLayout} labelAlign="left" onFinish={handleSubmit}>
                    <Form.Item label="Nome do cliente" name={"clientName"}
                        rules={[{ required: true, message: "Não esqueça de colocar seu nome" }]}
                    >
                        <Input type={"text"} />
                    </Form.Item>
                    <Form.Item label="Visão do produto" name={"productVision"}
                        rules={[{ required: true, message: "Conte um pouco sobre o produto que você quer" }]}
                    >
                        <TextArea />
                    </Form.Item>
                    <Form.Item label={"Seu Email"} name={"clientEmail"}
                        rules={[{required: true, type: "email" , message: "Digite um email válido"}]}
                    >

                        <Input type={"email"} />
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