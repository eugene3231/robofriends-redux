import React from 'react';
import './Hello.css' ;

class Hello extends React.Component {
    render() {
        return (
        <div className = "f1 tc"> {/* JSX: react allows us to write html in a js file */}
            <h1>Hello World</h1>
            <p>{this.props.greeting}</p>
        </div>
        )
    }
}

export default Hello; // so that other files can use this Hello.js