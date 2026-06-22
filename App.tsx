import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import ParticleField from "@/components/effects/ParticleField";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Setup2FA from "./pages/Setup2FA";
import Projects from "./pages/Projects";
import InvestorDashboard from "./pages/InvestorDashboard";
import BorrowerDashboard from "./pages/BorrowerDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ParticleField />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/setup-2fa" element={<Setup2FA />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dashboard/investor" element={<ProtectedRoute><InvestorDashboard /></ProtectedRoute>} />
            <Route path="/dashboard/borrower" element={<ProtectedRoute><BorrowerDashboard /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
