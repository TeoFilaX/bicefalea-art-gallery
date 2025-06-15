
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LaBuenaIllada from "./pages/LaBuenaIllada";
import ComposicionMitologica from "./pages/ComposicionMitologica";
import AbstraccionExpresiva from "./pages/AbstraccionExpresiva";
import FigurasEnMovimiento from "./pages/FigurasEnMovimiento";
import Bicefalea from "./pages/Bicefalea";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/obra/la-buena-illada" element={<LaBuenaIllada />} />
          <Route path="/obra/composicion-mitologica" element={<ComposicionMitologica />} />
          <Route path="/obra/abstraccion-expresiva" element={<AbstraccionExpresiva />} />
          <Route path="/obra/figuras-en-movimiento" element={<FigurasEnMovimiento />} />
          <Route path="/obra/bicefalea" element={<Bicefalea />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
