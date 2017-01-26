/**
 * Created by iliel on 1/26/2017.
 */
import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
    render() {
        console.log(this.props.title);
        return (
            <header>
                <Title title={this.props.title}/>
            </header>
        );
    }
}