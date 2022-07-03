import styled from "@emotion/styled";
import { FC } from "react";

export interface TrayItemWidgetProps {
    model: any;
    color: string;
    name: string;
}

export const Tray = styled.div<{ color: string }>`
    color: white;
    font-family: Helvetica, Arial;
    padding: 5px;
    margin: 0px 10px;
    border: solid 1px ${p => p.color};
    border-radius: 5px;
    margin-bottom: 2px;
    cursor: pointer;
`;

export const TrayItemWidget: FC<TrayItemWidgetProps> = props => {
    return (
        <Tray
            color={props.color}
            draggable
            onDragStart={event => {
                event.dataTransfer.setData("storm-diagram-node", JSON.stringify(props.model));
            }}
            className="tray-item"
        >
            {props.name}
        </Tray>
    );
};
