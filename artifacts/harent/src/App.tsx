import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
              alt="Hartono Rent Car — PT Surya Darma Perkasa" 
              className="w-full h-auto object-cover object-top block"
              style={{ maxHeight: '85vh' }}
            />
            {/* Soft gradient overlay at the bottom of the image to blend into the background */}
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-32 bg-gradient-to-t from-[#0a152e] to-transparent pointer-events-none" />
          </div>

          {/* Action Area */}
          <div className="px-5 sm:px-6 pb-10 pt-4 sm:pt-6 flex flex-col items-center justify-start z-20 relative -mt-4 sm:-mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full flex justify-center"
            >
              <a 
                href="https://script.google.com/macros/s/AKfycbxXXEUXEJcly615sHTsq9DkgCDi97bggkkACDNRrCiS6TDIwhNOB5ELcUK1WcKBjLaL/exec"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-1.5 bg-[#1b5df1] hover:bg-[#154ac6] text-white py-2 px-5 rounded-lg font-medium text-sm tracking-wide shadow-[0_2px_10px_rgba(27,93,241,0.35)] transition-all duration-300 hover:shadow-[0_4px_14px_rgba(27,93,241,0.55)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>LOGIN</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
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
