import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AboutPage extends Component {
    render() {
        return (
            <>
                <h2>About</ h2>
                <Link to="/" className="btn btn-primary">Home</Link>
            </>
        );
    }
}

export default AboutPage;
