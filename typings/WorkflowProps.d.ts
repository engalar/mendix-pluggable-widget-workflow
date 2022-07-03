/**
 * This file was generated from Workflow.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, ListValue, ListAttributeValue, WebImage } from "mendix";
import { Big } from "big.js";

export interface WorkflowContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    activitys: ListValue;
    activityName: ListAttributeValue<string>;
    activityX: ListAttributeValue<Big>;
    activityY: ListAttributeValue<Big>;
    attImage: DynamicValue<WebImage>;
}

export interface WorkflowPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    activitys: {} | { type: string } | null;
    activityName: string;
    activityX: string;
    activityY: string;
    attImage: { type: "static"; imageUrl: string } | { type: "dynamic"; entity: string } | null;
}
