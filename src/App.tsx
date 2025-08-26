import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DemoClub from "./pages/DemoClub";
import WhereWeveBeen from "./pages/WhereWeveBeen";
import VisitDetail from "./pages/VisitDetail";
import CreateClub from "./pages/CreateClub";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create-club" element={<CreateClub />} />
          <Route path="/demo-club" element={<DemoClub />} />
          <Route path="/demo-club/where-weve-been" element={<WhereWeveBeen />} />
          <Route path="/demo-club/visit/:visitId" element={<VisitDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
