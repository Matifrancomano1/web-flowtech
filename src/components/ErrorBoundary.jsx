import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log error for debugging
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-6">
          <div className="max-w-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Ha ocurrido un error</h2>
            <p className="text-gray-400 mb-4">Revisá la consola del developer herramientas para más detalles.</p>
            <pre className="text-sm text-red-400 bg-slate-900 p-4 rounded">{String(this.state.error)}</pre>
            <button onClick={() => window.location.reload()} className="mt-6 btn-ghost">Recargar</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
