import { Component } from 'react';

export class MyErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }

    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log("loggin", error, info)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

