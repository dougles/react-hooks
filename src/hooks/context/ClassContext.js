import React, { Component } from 'react';

export default class ClassContext extends Component {

    themeStyles(dark) {
        return {
            backgroundColor: dark ? 'green' : 'yellow',
            color: dark ? 'gray' : 'black',
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}> Class Context </div>
                }}
            </ThemeContext.Consumer>
        )
    }
}