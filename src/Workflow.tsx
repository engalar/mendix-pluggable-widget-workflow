import { createElement } from "react";
import { WorkflowContainerProps } from "../typings/WorkflowProps";


import './ui/index.scss';
import classNames from "classnames";
import App from "./components/App";


export default function (props: WorkflowContainerProps) {
    return (
        <div
            style={props.style}
            className={classNames("mxcn-react-flow", props.class)}
        >
            <App></App>
        </div>
    );
}
