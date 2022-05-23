import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { WorkflowPreviewProps } from "../typings/WorkflowProps";

declare function require(name: string): string;

export function preview(props: WorkflowPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
