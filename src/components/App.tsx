import { BodyWidget } from "./BodyWidget";
import { Application } from "./Application";
import { createElement } from "react";

export default () => {
    const app = new Application();
    return <BodyWidget app={app} />;
};
