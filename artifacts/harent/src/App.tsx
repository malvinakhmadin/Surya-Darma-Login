import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Instagram, Facebook, Globe } from "lucide-react";
import coverImage from "@assets/8e7798fa-7452-4433-afdb-1a2ed472b374_1777514305016.jpg";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-[100dvh] w-full bg-[#0a152e] text-white overflow-hidden flex flex-col font-sans">
      <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full relative flex flex-col"
        >
          {/* Main Cover Image */}
          <div className="w-full relative shadow-2xl z-10 flex-shrink-0">
            <img 
              src={coverImage} 
              alt="Hartono Rent Car Cover" 
              className="w-full h-auto object-cover object-top block"
              style={{ maxHeight: '85vh' }}
            />
            {/* Soft gradient overlay at the bottom of the image to blend into the background */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a152e] to-transparent pointer-events-none" />
          </div>

          {/* Action Area */}
          <div className="px-6 pb-12 pt-6 flex-1 flex flex-col items-center justify-start z-20 relative -mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full flex justify-center"
            >
              <a 
                href="https://script.google.com/macros/s/AKfycbxGRlsxx2h4c3lC_UUxmRIrNk2oztCzTZuXO76UOCsUA8kkbQVWtUs3DP09ceSUnMU/exec"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-1.5 bg-[#1b5df1] hover:bg-[#154ac6] text-white py-2 px-5 rounded-lg font-medium text-sm tracking-wide shadow-[0_2px_10px_rgba(27,93,241,0.35)] transition-all duration-300 hover:shadow-[0_4px_14px_rgba(27,93,241,0.55)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>LOGIN</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-blue-200/70"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <p>Jl. Daan Mogot km 1 No. 99<br/>Kota Jakarta Barat, DKI Jakarta 11510</p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="tel:081119027888" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>0811-1902-7888</span>
                </a>
                <a href="https://hartonorentcar.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <Globe className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>hartonorentcar.com</span>
                </a>
                <div className="flex items-center gap-4 mt-1">
                  <a href="https://instagram.com/hartono.rentcar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://facebook.com/HartonoRentCar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
