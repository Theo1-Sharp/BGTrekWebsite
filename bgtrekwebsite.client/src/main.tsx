import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageResize from "./components/PageResize/PageResize.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Home from "./pages/Home/Home.tsx";
import Blogs from "./pages/Blogs/Blogs.tsx";
import Destinations from "./pages/Destinations/Destinations.tsx";
import Location from "./pages/Location/Location.tsx";
import Store from "./pages/Store/Store.tsx";
import Company from "./pages/Company/Company.tsx";

import App from "./pages/App/App.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Adding query client provider for useQuery hook from react-query */}
    <QueryClientProvider client={queryClient}>
      <Router>
        <PageResize>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/app" element={<App />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/location" element={<Location />} />
            <Route path="/store" element={<Store />} />
            <Route path="/company" element={<Company />} />
          </Routes>
          <Footer />
        </PageResize>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
