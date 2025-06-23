import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router";
import LoadingPage from "./components/loading-page.tsx";
import Redirect from "./pages/redirect.tsx";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    loader: LoadingPage,
  },
  {
    path: "/r/:slug",
    Component: Redirect,
    loader: LoadingPage,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>
);
