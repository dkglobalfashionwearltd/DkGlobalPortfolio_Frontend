import React from "react";

interface ErrorPageProps {
  status?: number;
  title?: string;
  message?: string;
  stack?: string;
  showActions?: boolean; // optional: show "home" / "support" links
}

export default function ErrorPage({
  status,
  title,
  message,
  stack,
  showActions = true,
}: ErrorPageProps) {
  const is404 = status === 404;

  return (
    <main
      className={`grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8 ${
        is404 ? "bg-gray-900" : "container mx-auto pt-16"
      }`}
    >
      <div className="text-center">
        <p
          className={`text-base font-semibold ${
            is404 ? "text-indigo-400" : "text-red-500"
          }`}
        >
          {is404 ? "404" : status || "Error"}
        </p>
        <h1
          className={`mt-4 text-5xl font-semibold tracking-tight ${
            is404
              ? "text-balance text-white sm:text-7xl"
              : "text-red-600 sm:text-6xl"
          }`}
        >
          {title || (is404 ? "Page not found" : "Something went wrong")}
        </h1>
        <p
          className={`mt-6 text-lg font-medium ${
            is404 ? "text-pretty text-gray-400 sm:text-xl/8" : "text-gray-700"
          }`}
        >
          {message ||
            (is404
              ? "Sorry, we couldn’t find the page you’re looking for."
              : "An unexpected error occurred.")}
        </p>

        {is404 && showActions && (
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Go back home
            </a>
            <a href="/support" className="text-sm font-semibold text-white">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        )}

        {!is404 && stack && (
          <pre className="w-full mt-4 p-4 overflow-x-auto rounded bg-gray-100 text-sm text-red-600">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}
