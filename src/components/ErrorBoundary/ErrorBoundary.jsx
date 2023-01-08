import React, { Component } from 'react';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  getDerivedStateFromError() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage isNotFound={false} />;
    }

    return this.props.children;
  }
}
