import { createElement, FC } from "react";

import styled from "@emotion/styled";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { DefaultNodeModel } from "@projectstorm/react-diagrams";

import keys from "lodash-es/keys";

import { TrayWidget } from "./TrayWidget";
import { Application } from "./Application";
import { TrayItemWidget } from "./TrayItemWidget";
import { useUpdate } from "ahooks";

export interface BodyWidgetProps {
    app: Application;
}

export const Body = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

export const Header = styled.div`
    display: flex;
    background: rgb(30, 30, 30);
    flex-grow: 0;
    flex-shrink: 0;
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    padding: 10px;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-grow: 1;
`;

export const Layer = styled.div`
    position: relative;
    flex-grow: 1;
`;
export const Container = styled.div<{ color: string; background: string }>`
    height: 100%;
    background-color: ${p => p.background};
    background-size: 50px 50px;
    display: flex;

    > * {
        height: 100%;
        min-height: 100%;
        width: 100%;
    }

    background-image: linear-gradient(
            0deg,
            transparent 24%,
            ${p => p.color} 25%,
            ${p => p.color} 26%,
            transparent 27%,
            transparent 74%,
            ${p => p.color} 75%,
            ${p => p.color} 76%,
            transparent 77%,
            transparent
        ),
        linear-gradient(
            90deg,
            transparent 24%,
            ${p => p.color} 25%,
            ${p => p.color} 26%,
            transparent 27%,
            transparent 74%,
            ${p => p.color} 75%,
            ${p => p.color} 76%,
            transparent 77%,
            transparent
        );
`;
export const BodyWidget: FC<BodyWidgetProps> = props => {
    const forceUpdate = useUpdate();
    return (
        <Body>
            <Header>
                <div className="title">Storm React Diagrams - DnD demo</div>
            </Header>
            <Content>
                <TrayWidget>
                    <TrayItemWidget model={{ type: "in" }} name="In Node" color="rgb(192,255,0)" />
                    <TrayItemWidget model={{ type: "out" }} name="Out Node" color="rgb(0,192,255)" />
                </TrayWidget>
                <Layer
                    onDrop={event => {
                        const data = JSON.parse(event.dataTransfer.getData("storm-diagram-node"));
                        const nodesCount = keys(props.app.getDiagramEngine().getModel().getNodes()).length;

                        let node: DefaultNodeModel;
                        if (data.type === "in") {
                            node = new DefaultNodeModel("Node " + (nodesCount + 1), "rgb(192,255,0)");
                            node.addInPort("In");
                        } else {
                            node = new DefaultNodeModel("Node " + (nodesCount + 1), "rgb(0,192,255)");
                            node.addOutPort("Out");
                        }
                        const point = props.app.getDiagramEngine().getRelativeMousePoint(event);
                        node.setPosition(point);
                        props.app.getDiagramEngine().getModel().addNode(node);
                        forceUpdate();
                    }}
                    onDragOver={event => {
                        event.preventDefault();
                    }}
                    /* onMouseMove={(event) => {
                        props.app.getDiagramEngine().getActionEventBus().fireAction({ event });
                        event.preventDefault();
                    }} */
                >
                    <Container
                        background={"rgb(60, 60, 60)"}
                        color={"rgba(255,255,255, 0.05)"}
                    >
                        <CanvasWidget engine={props.app.getDiagramEngine()} />
                    </Container>
                </Layer>
            </Content>
        </Body>

    )
}
