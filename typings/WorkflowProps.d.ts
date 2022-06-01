/**
 * This file was generated from Workflow.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";

export interface WorkflowContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    activitys: ListValue;
    activityName: ListAttributeValue<string>;
}

export interface WorkflowPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    activitys: {} | { type: string } | null;
    activityName: string;
}
