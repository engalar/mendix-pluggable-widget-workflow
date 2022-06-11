import { WorkflowContainerProps } from "../typings/WorkflowProps";
import { ValueStatus } from 'mendix'

import "./ui/index.scss";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { UserTaskNode } from "./models/UserTaskNode";
import { Application } from "./components/Application";
import { BodyWidget } from "./components/BodyWidget";
import { UserTaskEdge } from "./models/UserTaskEdge";

export default function (props: WorkflowContainerProps) {
    const app = useMemo(() => new Application(), []);
    const [taskNodeList, setTaskNodeList] = useState<UserTaskNode[]>([]);
    const [taskEdgeList, setTaskEdgeList] = useState<UserTaskEdge[]>([]);

    useEffect(() => {
        if (props.outcomes.status === ValueStatus.Available) {
            setTaskEdgeList(props.outcomes.items!.map(d => ({
                Name: props.outcomeName.get(d).value!,
                From: props.outcomeFrom.get(d).value!,
                To: props.outcomeTo.get(d).value!,
            })))
        } else {
            setTaskEdgeList([])
        }
    }, [props.outcomes, props.outcomeName, props.outcomeFrom, props.outcomeTo])

    useEffect(() => {
        if (props.schemaNodes.status === ValueStatus.Available) {
            setTaskNodeList(props.schemaNodes.items!.map(d => ({
                Name: props.schemaNodeName.get(d).value!,
                Identity: props.schemaNodeKey.get(d).value!,
                X: props.schemaNodeX.get(d).value!.toNumber(),
                Y: props.schemaNodeY.get(d).value!.toNumber(),
            })))
        } else {
            setTaskNodeList([])
        }
    }, [props.schemaNodes, props.schemaNodeKey, props.schemaNodeName, props.schemaNodeX, props.schemaNodeY])

    console.log(taskNodeList,taskEdgeList);
    

    return (
        <div style={props.style} className={classNames("mxcn-react-flow", props.class)}>
            <BodyWidget app={app} />
        </div>
    );
}
