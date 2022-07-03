import { NodeModel, NodeModelGenerics } from "@projectstorm/react-diagrams";


export class DiamondNodeModel extends NodeModel<NodeModelGenerics> {
    constructor(public backGroupImage: string) {
        super({
            type: "diamond"
        });
    }
}
