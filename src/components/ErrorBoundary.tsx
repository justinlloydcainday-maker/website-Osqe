import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, ExternalLink } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in React component tree:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.hash = '#home';
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  public render() {
    if (this.state.hasError) {
      const errorMessage = this.state.error?.message || 'Unknown runtime error occurred.';
      const isChunkError = errorMessage.toLowerCase().includes('failed to fetch') ||
        errorMessage.toLowerCase().includes('dynamically imported module') ||
        errorMessage.toLowerCase().includes('mime');

      return (
        <div className="min-h-screen bg-[#faf8f2] flex items-center justify-center p-4">
          <div className="max-w-xl w-full bg-white rounded-2xl border border-stone-200 shadow-xl p-6 sm:p-8 text-stone-800">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h1 className="text-2xl font-bold font-heading text-stone-900 mb-2">
              {isChunkError ? 'Unable to Load Application Assets' : 'Application Display Notice'}
            </h1>

            <p className="text-stone-600 text-sm mb-4 leading-relaxed">
              {isChunkError ? (
                <>
                  The browser had trouble loading the app scripts or assets. This typically happens if the connection dropped or if the website was deployed to a subpath without matching base configuration.
                </>
              ) : (
                <>
                  An unexpected issue occurred while rendering this section. You can reload the page or return to the main home view.
                </>
              )}
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs font-mono text-stone-700 mb-6 break-all">
              {errorMessage}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#153e26] hover:bg-[#1b4d30] text-[#facc15] text-xs font-bold transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </button>

              <button
                onClick={this.handleGoHome}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors cursor-pointer"
              >
                <Home className="w-4 h-4" />
                Return to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
