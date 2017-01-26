/**
 * Created by iliel on 1/26/2017.
 */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome"
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            <div>
                <Header title={this.state.title}/>
                <Body changeTitle={this.changeTitle.bind(this)}/>
                <Footer/>
            </div>
        );
    }
}