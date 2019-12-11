import React, { Component } from "react";
import "../Nav/style.css";

const NavItem = props => {
    const pageURI = window.location.pathname + window.location.search;
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
    return(
        <li className = {liClassName}>
            <a href={props.path} className = {aClassName}>
                {props.name}
                {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
                {props.onClick}
            </a>
        </li>
    );
}

class Nav extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            collapsed: true
        };
    };

    toggleNav() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button onClick={this.toggleNav} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${classOne}`} id="navbarResponsiveLive">
                    <ul className="navbar-nav ml-auto">
                        <NavItem path="/" name="Home"/>
                        <NavItem path="/info" name="Info"/>
                        <NavItem path="/menu" name="Menu"/>
                        <NavItem path="/catering" name="Catering"/>
                        <NavItem path="/merch" name="Merch"/>
                        <NavItem path="/contact" name="Contact"/>
                        <NavItem path="/cart" name="Cart"/>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default Nav;