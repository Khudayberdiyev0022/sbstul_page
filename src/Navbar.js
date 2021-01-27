import React, { Component } from 'react'


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-primary">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">Navbar</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html"> Link </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html"> Link </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html"> Link </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html"> Link </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html"> Link </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html"> Link </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html"> Link </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html"> Link </a>
                                </li>
                            </ul>
                                <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

