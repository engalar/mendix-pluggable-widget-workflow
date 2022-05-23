import { createElement } from "react";
import { WorkflowContainerProps } from "../typings/WorkflowProps";
import ReactFlow, {
    addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
} from 'react-flow-renderer';

import { nodes as initialNodes, edges as initialEdges } from './initial-elemen';

const onInit = (reactFlowInstance: any) => console.log('flow loaded:', reactFlowInstance);

const OverviewFlow = () => {
    const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = (params: any) => setEdges((eds) => addEdge(params, eds));

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={onInit}
            fitView
            attributionPosition="top-right"
        >
            <MiniMap
                nodeStrokeColor={(n: any) => {
                    if (n.style?.background) return n.style.background;
                    if (n.type === 'input') return '#0041d0';
                    if (n.type === 'output') return '#ff0072';
                    if (n.type === 'default') return '#1a192b';

                    return '#eee';
                }}
                nodeColor={(n: any) => {
                    if (n.style?.background) return n.style.background;

                    return '#fff';
                }}
                nodeBorderRadius={2}
            />
            <Controls />
            <Background color="#aaa" gap={16} />
        </ReactFlow>
    );
};
export default function (props: WorkflowContainerProps) {
    console.log(props);
    return (
        <OverviewFlow />
    );
}
