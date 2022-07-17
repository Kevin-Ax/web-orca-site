import { Button, Form, InputNumber, Tooltip } from "antd";
import { CSSProperties } from "react";
import { useOrc } from "../../data/hooks/useOrc";
import { ItemModel } from "../../models/ItemModel";
import { getNotNullFromObjectBasedOnItemsArray } from "../../utils/functions";
import { icons } from "../icons";

interface FormOrcProps {
    items: ItemModel[];
    title: string;
}

const FormStyle: CSSProperties = {
    width: "80%",
};

const FormItemStyle: CSSProperties = {
    marginLeft: "10px"

};

const FormLayout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 24 },
};

export function FormOrc({ items, title }: FormOrcProps) {

    const { addItemsToOrcamento, orcamento } = useOrc();

    function handleSubmit(form: Record<string, unknown>) {
        const newItems = getNotNullFromObjectBasedOnItemsArray(form, items);
        addItemsToOrcamento(newItems);
        console.log("orcamento: ", JSON.stringify(orcamento));
        console.log("items da pagina: ", JSON.stringify(newItems));
    }

    return (
        <Form {...FormLayout} style={FormStyle} name={title} onFinish={handleSubmit} labelWrap>
            {items.map((item, index) => (
                <Form.Item key={index} labelAlign="right" label={item.getNameFormatted()} >

                    <Form.Item name={item.name} noStyle>
                        <InputNumber placeholder="0..." min={0} />
                    </Form.Item>

                    <Tooltip style={FormItemStyle} title={item.description}>
                        {icons.info}
                    </Tooltip>


                </Form.Item>
            ))}
            <Form.Item>
                <Button htmlType="submit">
                    Fazer orçamento
                </Button>
            </Form.Item>
        </Form>
    );
}