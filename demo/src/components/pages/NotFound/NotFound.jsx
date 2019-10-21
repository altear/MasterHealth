import React, { Component } from 'react';
import "./NotFound.scss"

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="page">This is a 404 Error</div> );
    }
}
 
export default NotFound;