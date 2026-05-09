import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/kapafrica_hero_background.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={heroBg}
          alt="Kapafrica Interior"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <span className="inline-block text-primary tracking-[0.3em] uppercase text-sm md:text-base border-b border-primary pb-2 mb-4">
            Charleroi, Belgique
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white">
            KAPAFRICA <br />
            <span className="italic text-primary/90 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">Restaurant Africain à Charleroi</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl font-light leading-relaxed">
            Le meilleur de la cuisine africaine et européenne au cœur de Charleroi. 
            Découvrez notre spécialité, le Foutou Banane, et laissez-vous emporter par les saveurs authentiques d'Afrique de l'Ouest.
          </p>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#contact">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-white hover:text-black rounded-none px-10 py-7 text-sm uppercase tracking-widest transition-all duration-300 min-w-[200px]"
              >
                Réserver une Table
              </Button>
            </a>
            <a href="/menu">
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white rounded-none px-10 py-7 text-sm uppercase tracking-widest transition-all duration-300 min-w-[200px]"
              >
                Voir le Menu
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] uppercase tracking-widest">Découvrir</span>
        <ChevronDown className="animate-bounce w-4 h-4" />
      </motion.div>
    </section>
  );
}
