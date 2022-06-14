import { NodeModel, NodeModelGenerics } from '@projectstorm/react-diagrams';

export interface DiamondNodeModelGenerics {
}

export class DiamondNodeModel extends NodeModel<NodeModelGenerics & DiamondNodeModelGenerics> {
	constructor() {
		super({
			type: 'diamond'
		});
	}
}
