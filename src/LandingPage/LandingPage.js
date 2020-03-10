import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

class Landing extends Component {
    renderLandingRoutes() {
        return (
            <>
                {['/'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={Landing}
                    />
                ))}
            </>
        );
    }

    render() {
        return (
            
            <div className="Landing">
                <nav className="Landing__nav">{this.renderLandingRoutes()}</nav>
                <header className="Landing__header">
                    <h1>
                        <Link to="/">Workout Tracker</Link>{' '}
                        <FontAwesomeIcon icon="check-double" />
                    </h1>
                    <h2>
                        
                    </h2>
                </header>
                <main className="App__main">{this.renderMainRoutes()}</main>
            </div>
        
        );
    }
    
}