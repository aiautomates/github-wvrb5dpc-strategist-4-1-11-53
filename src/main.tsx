import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Add error boundary with proper TypeScript types
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Initialize dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

window.dataLayer = window.dataLayer || [];

// Modified 404 tracking with proper URL handling
const track404 = () => {
  // Only track 404s in production
  if (window.location.hostname !== 'aiautomates.tech') {
    return;
  }

  try {
    const path = window.location.pathname;
    if (path !== '/' && !document.querySelector('main')) {
      window.dataLayer.push({
        event: '404Error',
        attributes: {
          path: path,
          referrer: document.referrer || '',
          timestamp: new Date().toISOString()
        }
      });
    }
  } catch (error) {
    console.error('Error tracking 404:', error);
  }
};

// Track 404s after initial load
window.addEventListener('load', track404);
// Track 404s on route changes
window.addEventListener('popstate', track404);

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <App />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }} 
        />
      </ErrorBoundary>
    </HelmetProvider>
  </StrictMode>
);