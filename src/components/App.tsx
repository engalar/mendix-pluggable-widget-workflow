import { TSCustomNodeFactory } from './custom-node-ts/TSCustomNodeFactory';
import { TSCustomNodeModel } from './custom-node-ts/TSCustomNodeModel';
import { BodyWidget } from './custom-node-ts/BodyWidget';
import { createElement, useMemo } from 'react';
import createEngine, { DefaultLinkModel, DiagramModel } from './custom-node-ts/Internal';

export default function () {
	const engine = useMemo(() => {


		// create an instance of the engine
		const engine = createEngine();

		// register the two engines
		engine.getNodeFactories().registerFactory(new TSCustomNodeFactory());

		// create a diagram model
		const model = new DiagramModel();

		//####################################################
		// now create two nodes of each type, and connect them

		const node1 = new TSCustomNodeModel({ color: 'rgb(192,255,0)' });
		node1.setPosition(50, 50);

		const node2 = new TSCustomNodeModel({ color: 'rgb(0,192,255)' });
		node2.setPosition(200, 50);

		const link1 = new DefaultLinkModel();
		link1.setSourcePort(node1.getPort('out'));
		link1.setTargetPort(node2.getPort('in'));

		model.addAll(node1, node2, link1);
		engine.setModel(model);
		return engine;
	}, [])
	return (
		<BodyWidget engine={engine} />
	)
}

