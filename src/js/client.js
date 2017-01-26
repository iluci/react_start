/**
 * Created by iliel on 1/26/2017.
 */
import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
        return (
            <h1>React Start</h1>
        );
    }
}
const app = document.getElementById('app');

ReactDOM.render(
    <Layout/>,
    app
);
