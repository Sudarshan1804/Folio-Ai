import { QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts } from
"@tanstack/react-router";

import appCss from "../styles.css?url";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

function NotFoundComponent() {
  return (/*#__PURE__*/
    _jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /*#__PURE__*/
      _jsxs("div", { className: "max-w-md text-center", children: [/*#__PURE__*/
        _jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }), /*#__PURE__*/
        _jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }), /*#__PURE__*/
        _jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }

        ), /*#__PURE__*/
        _jsx("div", { className: "mt-6", children: /*#__PURE__*/
          _jsx(Link, {
            to: "/",
            className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90", children:
            "Go home" }

          ) }
        )] }
      ) }
    ));

}

function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();

  return (/*#__PURE__*/
    _jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /*#__PURE__*/
      _jsxs("div", { className: "max-w-md text-center", children: [/*#__PURE__*/
        _jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }

        ), /*#__PURE__*/
        _jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }

        ), /*#__PURE__*/
        _jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [/*#__PURE__*/
          _jsx("button", {
            onClick: () => {
              router.invalidate();
              reset();
            },
            className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90", children:
            "Try again" }

          ), /*#__PURE__*/
          _jsx("a", {
            href: "/",
            className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent", children:
            "Go home" }

          )] }
        )] }
      ) }
    ));

}

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "Portfolio Genie | AI-Powered Portfolios" },
    { name: "description", content: "Upload your resume and get a stunning, personalized developer portfolio in seconds." },
    { name: "author", content: "Portfolio Genie" },
    { property: "og:title", content: "Portfolio Genie" },
    { property: "og:description", content: "AI-Powered Developer Portfolios from your Resume" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@PortfolioGenie" }],

    links: [
    { rel: "icon", href: "/favicon.png", type: "image/png" },
    { rel: "stylesheet", href: appCss },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" }]

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});

function RootShell({ children }) {
  return (/*#__PURE__*/
    _jsxs("html", { lang: "en", children: [/*#__PURE__*/
      _jsx("head", { children: /*#__PURE__*/
        _jsx(HeadContent, {}) }
      ), /*#__PURE__*/
      _jsxs("body", { children: [
        children, /*#__PURE__*/
        _jsx(Scripts, {})] }
      )] }
    ));

}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (/*#__PURE__*/
    _jsx(QueryClientProvider, { client: queryClient, children: /*#__PURE__*/
      _jsx(Outlet, {}) }
    ));

}