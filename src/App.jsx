import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
const clientQuery = new QueryClient({
  defaultOptions: { queries: { stateTime: 0 } },
});
export default function App() {
  return (
    <>
      <QueryClientProvider client={clientQuery}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles></GlobalStyles>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />

              <Route path="settings" element={<Settings />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="account" element={<Account />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            loading: {
              duration: 2000,
            },
            style: {
              fontSize: "1.4rem",
              fontWeight: 500,
              backgroundColor: "var(--color-grey-50)",
              color: "var(--color-grey-900)",
            },
            success: {
              style: {
                backgroundColor: "var(--color-green-700)",
                color: "var(--color-grey-50)",
              },
            },
            error: {
              style: {
                backgroundColor: "var(--color-red-700)",
                color: "var(--color-grey-50)",
              },
            },
            // Define the rest of your toast options here
            // For example, you can set the duration for each toast type
          }}
        />
      </QueryClientProvider>
    </>
  );
}
