import SRD, { DiagramEngine, DiagramModel } from "@projectstorm/react-diagrams";
import { DiamondNodeFactory } from "./custom/DiamondNodeFactory";
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
    }

    getActiveDiagram(): DiagramModel {
        return this.activeModel;
    }

    getDiagramEngine(): DiagramEngine {
        return this.engine;
    }
}
