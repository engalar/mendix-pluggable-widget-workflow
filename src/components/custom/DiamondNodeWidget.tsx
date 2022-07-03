import { DiamondNodeModel } from "./DiamondNodeModel";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import { Component } from "react";

export interface DiamondNodeWidgetProps {
    node: DiamondNodeModel;
    engine: DiagramEngine;
    size?: number;
}

/**
 * @author Dylan Vorster
 */
export class DiamondNodeWidget extends Component<DiamondNodeWidgetProps> {
    render() {
        return <img src={this.props.node.backGroupImage} alt="" />;
    }
}
