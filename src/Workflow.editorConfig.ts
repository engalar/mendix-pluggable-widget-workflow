import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { WorkflowPreviewProps } from "../typings/WorkflowProps";

export function getProperties(
    values: WorkflowPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: WorkflowPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
