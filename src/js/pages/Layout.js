/**
 * Created by iliel on 1/26/2017.
 */
import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Header title="header title"/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}