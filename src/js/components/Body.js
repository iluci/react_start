/**
 * Created by iliel on 1/26/2017.
 */
import React from "react";

export default class Body extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}