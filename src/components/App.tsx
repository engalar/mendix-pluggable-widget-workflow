import { BodyWidget } from './BodyWidget';
import { Application } from './Application';
import { createElement } from 'react';

export default () => {
	var app = new Application();
	return <BodyWidget app={app} />;
};
