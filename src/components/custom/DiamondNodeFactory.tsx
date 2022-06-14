import { DiamondNodeWidget } from './DiamondNodeWidget';
import { DiamondNodeModel } from './DiamondNodeModel';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

export class DiamondNodeFactory extends AbstractReactFactory<DiamondNodeModel, DiagramEngine> {
	constructor() {
		super('diamond');
	}

	generateReactWidget(event: any): JSX.Element {
		return <DiamondNodeWidget engine={this.engine} size={50} node={event.model} />;
	}

	generateModel() {
		return new DiamondNodeModel();
	}
}
