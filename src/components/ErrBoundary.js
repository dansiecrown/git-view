import React, { Component } from "react";
import FallbackPage from "./FallbackPage";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: "",
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    this.setState({ error: error });
  }
  render() {
    if (this.state.hasError) {
      return (
        <FallbackPage error={error} />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;