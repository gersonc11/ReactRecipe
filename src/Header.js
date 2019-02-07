import React from 'react';

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul classsName="nav navbar-nav">
                        <li className="nav-item"><a href="#">{props.homeLink}</a></li>
                        <li className="nav-item"><a href="#">{props.searchLink}</a></li>
                        <li className="nav-item"><a href="#">{props.dailyLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}