import { BodyWidget } from "./BodyWidget";
import { Application } from "./Application";
import { createElement, useMemo } from "react";

export default () => {
    const app = useMemo(() => new Application(), []);
    return <BodyWidget app={app} />;
};
