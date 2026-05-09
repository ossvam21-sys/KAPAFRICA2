import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Instagram, MessageCircle, CheckCircle } from "lucide-react";
import pattern from "@assets/generated_images/dark_luxury_abstract_african_pattern_with_gold_accents.png";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function InfoSection() {
  const [formData, setFormData] = useState({
    date: "",
    guests: 2,
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const createReservationMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erreur lors de la réservation");
      }

      return response.json();
    },
    onSuccess: () => {
      toast.success("Demande de réservation envoyée avec succès !", {
        description: "Nous vous contacterons bientôt pour confirmer votre réservation.",
        duration: 5000,
      });
      setFormData({
        date: "",
        guests: 2,
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    },
    onError: (error: Error) => {
      toast.error("Erreur", {
        description: error.message,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.date) {
      toast.error("Veuillez sélectionner une date");
      return;
    }

    createReservationMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10 order-2 lg:order-1">
            <div>
              <span className="text-primary uppercase tracking-[0.2em] text-sm">Contact & Réservation</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-white">Votre Table Vous Attend</h2>
              <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-md">
                Pour garantir une expérience exceptionnelle, nous vous recommandons de réserver au moins 24 heures à l'avance.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* Hours */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-primary mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="uppercase tracking-widest text-sm font-medium">Horaires</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-white/80 font-light">
                  <div className="flex justify-between"><span>Mardi</span> <span>18h30 - 22h</span></div>
                  <div className="flex justify-between"><span>Mercredi</span> <span>12h-14h & 18h30-22h</span></div>
                  <div className="flex justify-between"><span>Jeudi</span> <span>12h-14h & 18h30-22h</span></div>
                  <div className="flex justify-between"><span>Vendredi</span> <span>12h-14h & 18h30-22h</span></div>
                  <div className="flex justify-between"><span>Samedi</span> <span>18h30 - 23h</span></div>
                  <div className="flex justify-between"><span>Dimanche</span> <span>12h - 21h</span></div>
                  <div className="text-white/40 italic mt-2 sm:col-span-2">Fermé le Lundi</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Address */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="uppercase tracking-widest text-sm font-medium">Adresse</span>
                  </div>
                  <p className="text-white font-serif text-lg">Rue d'Orléans 37</p>
                  <p className="text-white/60 font-light">6000 Charleroi, Belgique</p>
                </div>

                {/* Phone */}
                 <div className="space-y-2">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <Phone className="w-5 h-5" />
                    <span className="uppercase tracking-widest text-sm font-medium">Téléphone</span>
                  </div>
                  <p className="text-white font-serif text-lg">0478 57 66 13</p>
                  <div className="flex gap-3 pt-2">
                     <a href="https://instagram.com/kap_africa_" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
                       <Instagram className="w-5 h-5" />
                     </a>
                     <a href="https://tiktok.com/@kapafrica" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
                       <TikTokIcon className="w-5 h-5" />
                     </a>
                     <a href="https://wa.me/32478576613" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
                       <MessageCircle className="w-5 h-5" />
                     </a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-md p-8 bg-white/5 border border-white/5 backdrop-blur-sm">
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-white/60">Date *</label>
                   <input 
                     type="date" 
                     required
                     value={formData.date}
                     onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                     className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" 
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-white/60">Personnes *</label>
                   <select 
                     value={formData.guests}
                     onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                     className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors [&>option]:bg-black"
                   >
                     <option value="2">2 Personnes</option>
                     <option value="3">3 Personnes</option>
                     <option value="4">4 Personnes</option>
                     <option value="5">5 Personnes</option>
                     <option value="6">6 Personnes</option>
                     <option value="7">7+ Personnes</option>
                   </select>
                 </div>
               </div>
               
               <div className="space-y-4">
                 <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-white/60">Nom</label>
                   <input 
                     type="text"
                     value={formData.name}
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" 
                     placeholder="Votre nom"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-white/60">Email</label>
                   <input 
                     type="email"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" 
                     placeholder="votre@email.com"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-white/60">Téléphone</label>
                   <input 
                     type="tel"
                     value={formData.phone}
                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                     className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-primary transition-colors" 
                     placeholder="0478 57 66 13"
                   />
                 </div>
               </div>
               
               <Button 
                 type="submit"
                 disabled={createReservationMutation.isPending}
                 className="w-full bg-primary text-black hover:bg-white rounded-none uppercase tracking-widest py-6 transition-colors duration-300 disabled:opacity-50"
               >
                 {createReservationMutation.isPending ? "Envoi en cours..." : "Confirmer la demande"}
               </Button>
            </form>
          </div>

          <div className="relative h-[500px] lg:h-[600px] border border-white/10 p-4 order-1 lg:order-2">
             <div className="absolute inset-0 bg-white/5 transform rotate-2 z-0" />
             <div className="h-full w-full bg-zinc-900 flex flex-col relative z-10 overflow-hidden">
                <div className="bg-black/90 p-4 text-center border-b border-white/10">
                  <h3 className="text-xl md:text-2xl font-serif text-white tracking-wide">KAPAFRICA</h3>
                  <p className="text-primary text-sm uppercase tracking-widest mt-1">Restaurant de cuisine Africaine & Européenne</p>
                </div>
                <div className="flex-1 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.5!2d4.4448!3d50.4108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c22604d2ce6c9b%3A0x9f23c39f35f47b8e!2sRue%20d&#39;Orl%C3%A9ans%2037%2C%206000%20Charleroi%2C%20Belgium!5e0!3m2!1sfr!2sbe!4v1701878400000!5m2!1sfr!2sbe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Localisation Kapafrica"
                    data-testid="map-restaurant-location"
                  />
                </div>
                <div className="bg-black/90 p-4 text-center border-t border-white/10">
                  <p className="text-white font-serif text-lg">Rue d'Orléans 37, 6000 Charleroi</p>
                  <a 
                    href="https://maps.google.com/?q=Rue+d'Orleans+37+Charleroi" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm mt-2"
                    data-testid="link-open-google-maps"
                  >
                    <MapPin className="w-4 h-4" />
                    Ouvrir dans Google Maps
                  </a>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
