import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1>404</h1>
        <p>This page does not exist...</p>
        <Link to="/" className="btn">Go Home</Link>
      </div>
    </div>
  )
}
