import { Tooltip } from "antd";
import { icons } from "./icons";


interface InfoTooltipProps {
    info: string;
}


export function InfoTooltip({ info }: InfoTooltipProps) {
    return (
        <Tooltip title={info}>
            {icons.info}
        </Tooltip>
    );
}