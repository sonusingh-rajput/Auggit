import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from "react-router";
import { FiAlertTriangle, FiRefreshCw, FiHome } from "react-icons/fi";
import Navbar from "~/components/common/Navbar";
import Footer from "~/components/common/Footer";
import WhatsAppFloat from "~/components/common/WhatsAppFloat";
import ScrollProgressBar from "~/components/common/ScrollProgressBar";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon Link added here */}
        <link rel="icon" type="image/png" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#ffffff] text-[#353535] font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-[#41a0c8] selection:text-white">
        {/* Top Scroll Indicator */}
        <ScrollProgressBar />

        {/* Global Nav */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppFloat />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  let title = "Unexpected Application Error";
  let message = "An error occurred while loading this view. Our team has been notified.";
  let details: string | undefined;
  let statusCode = 500;

  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    if (error.status === 404) {
      title = "Page Not Found";
      message = "The requested resource could not be found or has been moved.";
    } else {
      title = `${error.status} ${error.statusText || "Error"}`;
      message = error.data?.message || "A server or navigation error occurred.";
    }
  } else if (error instanceof Error) {
    message = error.message;
    details = error.stack;
  } else if (typeof error === "string") {
    message = error;
  }

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-20 bg-gradient-to-b from-[#ffffff] via-[#f1f2f2]/40 to-[#ffffff]">
      <div className="max-w-xl w-full mx-auto text-center space-y-8 p-8 sm:p-12 rounded-3xl bg-white border border-[#e3e3e3] shadow-xl shadow-[#062039]/5">
        <div className="inline-flex p-4 rounded-2xl bg-[#9eddf7]/30 text-[#41a0c8] border border-[#41a0c8]/20">
          <FiAlertTriangle className="w-8 h-8 text-[#f7c037]" />
        </div>
        
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#41a0c8] px-3 py-1 rounded-full bg-[#f1f2f2] border border-[#e3e3e3]">
            Status {statusCode}
          </span>
          <h1 className="text-3xl font-extrabold text-[#062039] tracking-tight">
            {title}
          </h1>
          <p className="text-sm text-[#353535] leading-relaxed max-w-md mx-auto">
            {message}
          </p>
        </div>

        {details && (
          <details className="text-left bg-[#f1f2f2] p-4 rounded-xl border border-[#e3e3e3] text-xs font-mono text-[#353535] overflow-x-auto">
            <summary className="cursor-pointer font-semibold text-[#062039] mb-2 select-none">
              Technical Details
            </summary>
            <pre className="whitespace-pre-wrap">{details}</pre>
          </details>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#e3e3e3] hover:bg-[#f1f2f2] text-[#062039] font-semibold text-sm transition-all shadow-sm cursor-pointer hover:scale-105"
          >
            <FiRefreshCw className="w-4 h-4 text-[#41a0c8]" />
            <span>Reload Page</span>
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#41a0c8] hover:bg-[#1267a7] text-white font-semibold text-sm transition-all shadow-md shadow-[#41a0c8]/25 cursor-pointer hover:scale-105"
          >
            <FiHome className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}