/**
 * Created by iliel on 1/26/2017.
 */
import React from "react";

export default class Title extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}