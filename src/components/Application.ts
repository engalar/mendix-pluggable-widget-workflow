import SRD, { DefaultNodeModel, DiagramEngine, DiagramModel } from "@projectstorm/react-diagrams";
import { AdvancedLinkFactory, AdvancedPortModel } from "./Demo";

/**
 * @author Dylan Vorster
 */
export class Application {
    protected activeModel: DiagramModel;
    protected engine: DiagramEngine;

    constructor() {
        this.engine = SRD();
        this.engine.getLinkFactories().registerFactory(new AdvancedLinkFactory());
        this.activeModel = new DiagramModel();
        this.engine.setModel(this.activeModel);

        var node1 = new DefaultNodeModel("Source", "rgb(0,192,255)");
        let port11 = node1.addPort(new AdvancedPortModel(false, "out11"));
        let port12 = node1.addPort(new AdvancedPortModel(false, "out12"));
        node1.setPosition(100, 100);

        var node2 = new DefaultNodeModel("Target", "rgb(192,255,0)");
        var port21 = node2.addPort(new AdvancedPortModel(true, "in21"));
        var port22 = node2.addPort(new AdvancedPortModel(true, "in22"));
        node2.setPosition(500, 350);

        var node3 = new DefaultNodeModel("Source", "rgb(0,192,255)");
        // let port31 = node3.addPort(new AdvancedPortModel(false, "out31"));
        node3.setPosition(100, 500);


        var model = this.activeModel;

        model.addAll(port11.link(port21), port22.link(port12));

        // add everything else
        model.addAll(node1, node2, node3);
    }

    getActiveDiagram(): DiagramModel {
        return this.activeModel;
    }

    getDiagramEngine(): DiagramEngine {
        return this.engine;
    }
}
