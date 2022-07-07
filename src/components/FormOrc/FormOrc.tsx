import { Form, Input } from "antd";


export function FormOrc() {
    return (
        <Form
            name="Orçamento de sites"
        >
            <Form.Item label="Nome" name={"nome"}
            >
                <Input />
            </Form.Item>
        </Form>
    );
}