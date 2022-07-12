import { Form, Input, Select, Tooltip } from "antd";
import { CSSProperties } from "react";
import { ItemModel } from "../../models/ItemModel";
import { icons } from "../icons";

interface FormOrcProps {
    items: ItemModel[];
    title: string;
}

const FormStyle: CSSProperties = {
    width: "50%",
};

const selectStyle: CSSProperties = {
    width: "150px",
};

const formItemLayout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 14 },
};

export function FormOrc({ items, title }: FormOrcProps) {

    const { Option } = Select;
    const oneToFive = [1, 2, 3, 4, 5];

    return (
        <Form {...formItemLayout} style={FormStyle} name={title} labelWrap>
            {items.map(item => (
                <Form.Item labelAlign="right" label={item.getNameFormatted()} name={item.name} >
                    <span className="flex items-center gap-x-2">
                        <Select style={selectStyle} allowClear>
                            {oneToFive.map(option => (
                                <Option value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                        <Tooltip title={item.description}>
                            {icons.info}
                        </Tooltip>
                    </span>

                </Form.Item>
            ))}
        </Form>
    );
}