import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Tesla from "./pages/Tesla";
import Alumni from "./pages/Alumni";
import Workshop from "./pages/Workshop";
import RisTIE from "./pages/RisTIE";
import Partnership from "./pages/Partnership";
import EME from "./pages/EME";
import BPME from "./pages/BPME";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import Merch from "./pages/Merch";
import Publications from "./pages/Publications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/tesla" element={<Tesla />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/ristie" element={<RisTIE />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/eme" element={<EME />} />
          <Route path="/bpme" element={<BPME />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/publications" element={<Publications />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
