import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ROUTES } from "./constants";

import Stock from "./pages/Stock/Stock";
import Main from "./pages/Main/Main";

import AppLayout from "./components/AppLayout/AppLayout";

import "./styles/custom.css";
import "./styles/globals.css";

import "@fontsource-variable/nunito";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <Main />,
      },
      {
        path: ROUTES.STOCK,
        element: <Stock />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
);

