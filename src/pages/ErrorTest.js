import React from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';
import FallbackPage from '../components/FallbackPage';

import "./error-test.css"
// useErrorHandler





function Bomb({ err }) {
    if (err === true) {
        throw new Error('Your coconut head have clicked the forbidden button!!');
    }
    return `Your Error Message Shows here`;
}



export default function ErrApp() {
    const [err, setErr] = React.useState(false);
    const usernameRef = React.useRef(null);


    return (
        <div className="error-test">
            <div className="error-container">
                <h1>Click the button Below to test the Error Boundary</h1>
                <button onClick={() => setErr(true)}>Click Here</button>
                <div>
                    <ErrorBoundary
                        FallbackComponent={FallbackPage}
                    >


                        <Bomb err={err} />

                    </ErrorBoundary>
                </div>
            </div>
        </div>
    );
}
