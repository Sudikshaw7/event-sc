import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Announcements from "./pages/Announcements";
import CalendarPage from "./pages/CalendarPage";
import Donation from "./pages/Donation";
import Invitation from "./pages/Invitation";
import InviteLanding from "./pages/InviteLanding";
import AdminDashboard from "./pages/AdminDashboard";
import AdminGuests from "./pages/AdminGuests";
import GuestList from "./pages/GuestList";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import WhatsAppPopup from "./components/WhatsAppPopup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppPopup />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/invite/:guestId" element={<InviteLanding />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/guests" element={<AdminGuests />} />
          <Route path="/guests" element={<GuestList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;