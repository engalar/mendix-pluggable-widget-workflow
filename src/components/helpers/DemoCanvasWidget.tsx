import { FC, Fragment } from "react";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

export interface DemoCanvasWidgetProps {
    color?: string;
    background?: string;
}

export const Container = styled.div<{ color: string; background: string }>`
    height: 100%;
    background-color: ${p => p.background};
    background-size: 50px 50px;
    display: flex;

    > * {
        height: 100%;
        min-height: 100%;
        width: 100%;
    }

    background-image: linear-gradient(
            0deg,
            transparent 24%,
            ${p => p.color} 25%,
            ${p => p.color} 26%,
            transparent 27%,
            transparent 74%,
            ${p => p.color} 75%,
            ${p => p.color} 76%,
            transparent 77%,
            transparent
        ),
        linear-gradient(
            90deg,
            transparent 24%,
            ${p => p.color} 25%,
            ${p => p.color} 26%,
            transparent 27%,
            transparent 74%,
            ${p => p.color} 75%,
            ${p => p.color} 76%,
            transparent 77%,
            transparent
        );
`;

export const Expand = css`
    html,
    body,
    #root {
        height: 100%;
    }
`;

export const DemoCanvasWidget: FC<DemoCanvasWidgetProps> = props => {
    return (
        <Fragment>
            <Global styles={Expand} />
            <Container
                background={props.background || "rgb(60, 60, 60)"}
                color={props.color || "rgba(255,255,255, 0.05)"}
            >
                {props.children}
            </Container>
        </Fragment>
    );
}
