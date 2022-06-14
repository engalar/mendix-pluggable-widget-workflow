import SRD, { DefaultNodeModel, DiagramEngine, DiagramModel } from "@projectstorm/react-diagrams";
import { DiamondNodeFactory } from "./custom/DiamondNodeFactory";
import { DiamondNodeModel } from "./custom/DiamondNodeModel";
import { AdvancedLinkFactory } from "./Demo";

/**
 * @author Dylan Vorster
 */
export class Application {
    protected activeModel: DiagramModel;
    protected engine: DiagramEngine;

    constructor() {
        this.engine = SRD();
        this.engine.getLinkFactories().registerFactory(new AdvancedLinkFactory());
        this.engine.getNodeFactories().registerFactory(new DiamondNodeFactory());
        this.activeModel = new DiagramModel();
        this.engine.setModel(this.activeModel);

        var nodeBG = new DiamondNodeModel();
        nodeBG.setPosition(250, 108);

        var node = new DefaultNodeModel("Target", "rgb(192,255,0)");

        var model = this.activeModel;

        // add everything else
        model.addAll(nodeBG, node);
    }

    getActiveDiagram(): DiagramModel {
        return this.activeModel;
    }

    getDiagramEngine(): DiagramEngine {
        return this.engine;
    }
}
