
import { createElement } from 'react';
import { AbstractReactFactory, DiagramEngine } from './Internal';

import { TSCustomNodeModel } from './TSCustomNodeModel';
import { TSCustomNodeWidget } from './TSCustomNodeWidget';

export class TSCustomNodeFactory extends AbstractReactFactory<TSCustomNodeModel, DiagramEngine> {
	constructor() {
		super('ts-custom-node');
	}

	generateModel(_initialConfig: any) {
		return new TSCustomNodeModel();
	}

	generateReactWidget(event: any): JSX.Element {
		return <TSCustomNodeWidget engine={this.engine as DiagramEngine} node={event.model} />;
	}
}
