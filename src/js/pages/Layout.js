/**
 * Created by iliel on 1/26/2017.
 */
import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1>Test</h1>
                <Link to="archives">Archives</Link>
                <Link to="settings">Settings</Link>
            </div>
        );
    }
}