import React from 'react';
import { slideInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { Link } from 'react-router-dom';

export default function FallbackPage({ error, resetErrorBoundary }) {
    const styles = {
        slideInUp: {
            animation: 'x 1s',
            animationName: Radium.keyframes(slideInUp, 'slideInUp')
        }
    }
    return (
        <StyleRoot>
            <div style={styles.slideInUp} >
                <h1>This page has some Error! </h1>
                <pre style={{ color: 'red' }}>{error.message}</pre>
                <Link to="/" className="btn">Go Home</Link>
            </div>
        </StyleRoot>
    )
}
