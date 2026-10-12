import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorFallback({ status, title, message, onReset }) {
    return (
        <section className="flex flex-col justify-center items-center min-h-screen pt-20 pb-8 sm:pt-28 sm:pb-10 text-center">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#1B1A1F]/60 uppercase mb-6">
                [{status} // Error]
            </span>

            <h1 className="text-[clamp(3rem,_1rem_+_10vw,_8rem)] leading-[0.85] font-semibold text-[#1B1A1F] tracking-[-0.035em] select-none">
                {title}
            </h1>

            {message && (
                <p className="max-w-[460px] mt-8 text-sm sm:text-base leading-[1.35] text-[#1B1A1F]/70 break-words">
                    {message}
                </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
                {onReset && (
                    <button
                        type="button"
                        onClick={onReset}
                        className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-5 py-3 rounded-md hover:bg-black transition-colors text-sm uppercase cursor-pointer"
                    >
                        Try Again
                    </button>
                )}

                <a
                    href="/"
                    className="inline-flex items-center gap-2 border border-[#1B1A1F]/20 text-[#1B1A1F] px-5 py-3 rounded-md hover:border-[#1B1A1F]/60 transition-colors text-sm uppercase"
                >
                    Home
                    <span className="text-lg leading-none">↗</span>
                </a>
            </div>
        </section>
    );
}

export default class ErrorBoundary extends React.Component {
    state = { error: null };

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('[ErrorBoundary]', error, errorInfo);
    }

    resetErrorBoundary = () => {
        this.setState({ error: null });
    };

    render() {
        const { error } = this.state;
        const { children, fallback } = this.props;

        if (error) {
            if (typeof fallback === 'function') {
                return fallback({ error, resetErrorBoundary: this.resetErrorBoundary });
            }

            if (fallback) {
                return fallback;
            }

            return (
                <ErrorFallback
                    status={500}
                    title="Something went wrong"
                    message="An unexpected error occurred. Please try refreshing the page."
                    onReset={this.resetErrorBoundary}
                />
            );
        }

        return children;
    }
}

export function RouteError() {
    const error = useRouteError();

    const status = isRouteErrorResponse(error) ? error.status : 500;
    const message = isRouteErrorResponse(error)
        ? error.data || error.statusText
        : error?.message;

    return (
        <ErrorFallback
            status={status}
            title={status === 404 ? 'Page not found' : 'Something went wrong'}
            message={typeof message === 'string' ? message : undefined}
        />
    );
}
