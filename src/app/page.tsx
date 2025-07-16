import Home from "@/components/home";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
  return (
    <TooltipProvider>
      <div>
        <Home />
      </div>
    </TooltipProvider>
  );
}
