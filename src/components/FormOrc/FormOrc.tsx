import { Form, Input } from "antd";


export function FormOrc() {
    return (
        <Form
            name="Escolha quantos itens de cada função serão usados:"
        >
            <Form.Item label="Agenda" name={"agenda"}
            >
                <Input type={"number"} />
            </Form.Item>
            <Form.Item label="Tipo de página">
                <Input />
            </Form.Item>
        </Form>
    );
}