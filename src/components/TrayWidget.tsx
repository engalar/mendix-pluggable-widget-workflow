import { Component, createElement } from "react";
import styled from "@emotion/styled";

export const Tray = styled.div`
    min-width: 200px;
    background: rgb(20, 20, 20);
    flex-grow: 0;
    flex-shrink: 0;
`;

export class TrayWidget extends Component {
    render() {
        return <Tray>{this.props.children}</Tray>;
    }
}
