import { Card, Descriptions } from "antd";
import { CSSProperties } from "react";
import { OrcItemsInterface } from "../../core/OrcItemsInterface";
import { OrcModel } from "../../models/OrcModel";
import { formatPriceToBRL } from "../../utils/functions";
import { InfoTooltip } from "../InfoTooltip";


interface BudgetCardProps {
    orc: OrcModel;
}

const CardStyle: CSSProperties = {
    width: "80%",
};


export function BudgetCard({ orc }: BudgetCardProps) {

    const items = orc.items;

    function descriptionItemTitle(item: OrcItemsInterface) {
        return (
            <span className="flex items-center gap-y-3">
                {` ${item.qtde}x ${item.item.name} `}
                <InfoTooltip info={item.item.description} />
            </span>
        );
    }

    return (
        <Card style={CardStyle} title={`Orçamento para ${orc.clientName}`}>
            <Descriptions bordered>
                <Descriptions.Item span={4} label="Visão do produto">
                    {orc.productVision}
                </Descriptions.Item>
                {
                    items.map((item, index) => (
                        <Descriptions.Item span={2} key={index} label={descriptionItemTitle(item)}

                        >
                            {formatPriceToBRL(item.item.value * item.qtde)}
                        </Descriptions.Item>
                    ))
                }
                <Descriptions.Item span={4} label={"Total"}>
                    {orc.getValueFormatted()}
                </Descriptions.Item>
            </Descriptions>
        </Card>
    );
}