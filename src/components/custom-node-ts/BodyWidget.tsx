import { createElement } from 'react';
import { CanvasWidget, DiagramEngine } from './Internal';

export interface BodyWidgetProps {
	engine: DiagramEngine;
}


export function BodyWidget(props: BodyWidgetProps) {
	return <CanvasWidget className="diagram-container" engine={props.engine} />;
}
