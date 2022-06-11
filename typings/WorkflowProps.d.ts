/**
 * This file was generated from Workflow.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface WorkflowContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    activitys: ListValue;
    activityOutcome: ListAttributeValue<string>;
    activityKey: ListAttributeValue<string>;
    schemaNodes: ListValue;
    schemaNodeName: ListAttributeValue<string>;
    schemaNodeKey: ListAttributeValue<string>;
    schemaNodeX: ListAttributeValue<Big>;
    schemaNodeY: ListAttributeValue<Big>;
    outcomes: ListValue;
    outcomeName: ListAttributeValue<string>;
    outcomeFrom: ListAttributeValue<string>;
    outcomeTo: ListAttributeValue<string>;
}

export interface WorkflowPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    activitys: {} | { type: string } | null;
    activityOutcome: string;
    activityKey: string;
    schemaNodes: {} | { type: string } | null;
    schemaNodeName: string;
    schemaNodeKey: string;
    schemaNodeX: string;
    schemaNodeY: string;
    outcomes: {} | { type: string } | null;
    outcomeName: string;
    outcomeFrom: string;
    outcomeTo: string;
}
