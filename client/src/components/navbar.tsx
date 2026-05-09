import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@assets/Untitled_design__5_-removebg-preview_1765039903398.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/#menu", label: "La Carte" },
    { href: "/#experience", label: "Vos Expériences" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
        scrolled 
          ? "bg-background/95 backdrop-blur-md py-1 border-white/5" 
          : "bg-transparent py-2"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90 transition-opacity -my-8">
          <img src={logo} alt="Kapafrica" className="h-32 md:h-40 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-widest text-xs px-8 py-6 rounded-none transition-all duration-300"
            >
              Réserver
            </Button>
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-white/10 w-full sm:w-[400px]">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <Link href="/" className="mb-8">
                  <img src={logo} alt="Kapafrica" className="h-48 w-auto" />
                </Link>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xl font-serif text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a href="#contact" className="w-full max-w-[200px]">
                  <Button 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest w-full mt-8 rounded-none py-6"
                  >
                    Réserver
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
