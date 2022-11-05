import React from 'react'

export default function ErrorHandler({ error, resetErrorBoundary }) {
    return (
        <div>
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}
