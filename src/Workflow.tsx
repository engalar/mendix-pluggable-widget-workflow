import { WorkflowContainerProps } from "../typings/WorkflowProps";
import { ValueStatus } from "mendix";

import "./ui/index.scss";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { UserTaskNode } from "./models/UserTaskNode";
import { Application } from "./components/Application";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { DiamondNodeModel } from "./components/custom/DiamondNodeModel";
import { DefaultNodeModel, DiagramModel } from "@projectstorm/react-diagrams";

export default function (props: WorkflowContainerProps) {
    const app = useMemo(() => new Application(), []);
    const [taskNodeList, setTaskNodeList] = useState<UserTaskNode[]>([]);

    useEffect(() => {
        if (props.activitys.status === ValueStatus.Available) {
            setTaskNodeList(
                props.activitys.items!.map<UserTaskNode>(d => ({
                    Name: props.activityName.get(d).value!,
                    X: props.activityX.get(d).value!.toNumber(),
                    Y: props.activityY.get(d).value!.toNumber()
                }))
            );
        } else {
            setTaskNodeList([]);
        }
    }, [props.activitys, props.activityName, props.activityX, props.activityY, props.attImage]);

    useEffect(() => {
        if (props.attImage.status === ValueStatus.Available) {
            const nodeBG = new DiamondNodeModel(props.attImage.value.uri);
            nodeBG.setPosition(250, 108);
            nodeBG.setLocked(true);
            const model = new DiagramModel();
            model.addAll(
                nodeBG,
                ...taskNodeList.map(d => {
                    const activity = new DefaultNodeModel(d.Name, "rgb(192,255,0)");
                    activity.setPosition(d.X, d.Y);
                    return activity;
                })
            );
            app.getDiagramEngine().setModel(model);
        }
    }, [taskNodeList, props.attImage]);

    return (
        <div style={props.style} className={classNames("mxcn-react-flow", props.class)}>
            <CanvasWidget engine={app.getDiagramEngine()} />
        </div>
    );
}
