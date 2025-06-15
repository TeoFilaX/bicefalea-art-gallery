
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ElMenson from "./pages/ElMenson";
import SolYLuna from "./pages/SolYLuna";
import Bicefalea from "./pages/Bicefalea";
import QuintoElemento from "./pages/QuintoElemento";
import Prueba5 from "./pages/Prueba5";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/obra/el-menson" element={<ElMenson />} />
          <Route path="/obra/sol-y-luna" element={<SolYLuna />} />
          <Route path="/obra/bicefalea" element={<Bicefalea />} />
          <Route path="/obra/quinto-elemento" element={<QuintoElemento />} />
          <Route path="/obra/prueba-5" element={<Prueba5 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
