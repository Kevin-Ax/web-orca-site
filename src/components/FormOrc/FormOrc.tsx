/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, InputNumber, Space, Tooltip } from "antd";
import { CSSProperties, useCallback, useEffect } from "react";
import { useOrc } from "../../data/hooks/useOrc";
import { usePush } from "../../data/hooks/usePush";
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

    const { addItemsToOrcamento, clearBudget } = useOrc();
    const { pushToBudgetPage } = usePush();

    function handleSubmit(form: Record<string, unknown>) {
        const newItems = getNotNullFromObjectBasedOnItemsArray(form, items);
        addItemsToOrcamento(newItems);

        pushToBudgetPage();
    }

    const handleClearBudget = useCallback(() => {
        clearBudget();
    }, []);

    useEffect(() => {
        handleClearBudget();
    }, [handleClearBudget]);

    return (
        <Form {...FormLayout} style={FormStyle} name={title} onFinish={handleSubmit} labelWrap>
            {items.map((item, index) => (

                <Form.Item key={index} labelAlign="right" label={item.getNameFormatted()} >
                    <Space>

                        <Form.Item name={item.name} noStyle>
                            <InputNumber placeholder="0..." min={0} />
                        </Form.Item>

                        <Tooltip style={FormItemStyle} title={item.description}>
                            {icons.info}
                        </Tooltip>
                    </Space>


                </Form.Item>

            ))}
            <Form.Item>
                <Button style={{ display: "flex", justifyContent: "center", width: "30%" }} htmlType="submit">
                    Fazer orçamento
                </Button>
            </Form.Item>
        </Form>
    );
}