/**
 * Created by iliel on 1/26/2017.
 */
import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import Layout from "./pages/Layout.js";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme(darkBaseTheme);

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Layout/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
