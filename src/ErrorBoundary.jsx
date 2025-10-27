import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    // eslint-disable-next-line no-console
    console.error('Uncaught error in component tree:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 20, background: '#2b0b0b', color: '#fff', fontFamily: 'Segoe UI, Tahoma, sans-serif' }}>
          <h2 style={{ color: '#ff8b8b' }}>Something went wrong</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{String(this.state.error && this.state.error.toString())}</pre>
          <button onClick={() => window.location.reload()} style={{ marginTop: 12, padding: '8px 12px' }}>Reload</button>
        </div>
      );
    }
    return this.props.children;
  }
}
