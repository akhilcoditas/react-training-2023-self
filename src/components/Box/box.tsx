import { Component, ReactNode } from "react";
import Boxstyle from "./Box.module.scss";

const Box = () => {
    return (
        <h3 className = {`${Boxstyle.box} ${Boxstyle.box_green}`}>Dabbe mein dabba</h3>
    )
}

export class BoxComponent extends Component {
    render(): ReactNode {
        return (
                <h3 className = {`${Boxstyle.box} ${Boxstyle.box_green}`}>Box class</h3>
        )
    }
}

export default Box;


// how to understand where is bug. as it is rendered inner html.