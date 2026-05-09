import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FullMenu } from "@/components/full-menu";
import { InfoSection } from "@/components/info-section";
import { ReviewsSection } from "@/components/reviews-section";
import chefPhoto from "@assets/IMG_4170_1765037784552.PNG";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        
        <section id="about" className="py-32 container mx-auto px-6 relative">
          <span className="text-9xl font-serif text-white/[0.02] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap">
            KAPAFRICA
          </span>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-white">L'Âme de l'Afrique, L'Art de la Table</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                    <img 
                      src={chefPhoto} 
                      alt="Chef Sira Barry" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-black px-6 py-2 text-sm uppercase tracking-widest font-semibold">
                    La Chef
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-serif text-primary">Sira Barry</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Originaire de Guinée, Sira Barry porte en elle la richesse culinaire de l'Afrique de l'Ouest. 
                  Passionnée par la cuisine africaine et européenne, elle a décidé de réaliser son rêve : 
                  créer un lieu unique au cœur de Charleroi où les saveurs de son enfance rencontrent l'art culinaire moderne.
                </p>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Chaque plat qu'elle prépare est une invitation au voyage, un pont entre deux continents, 
                  une célébration des traditions et de l'innovation. Chez Kapafrica, elle vous accueille 
                  avec chaleur et vous fait découvrir le véritable goût de l'Afrique.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FullMenu />
        <ReviewsSection />
        <InfoSection />
      </main>
      <footer className="py-16 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-primary font-serif text-xl mb-4">Kapafrica</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Restaurant africain et européen à Charleroi. Découvrez les saveurs authentiques de l'Afrique de l'Ouest : Mafé, Yassa, Foutou Banane et bien plus encore.
              </p>
            </div>
            <div>
              <h4 className="text-primary font-serif text-xl mb-4">Nous Trouver</h4>
              <address className="text-white/60 text-sm not-italic leading-relaxed">
                <p>Rue d'Orléans 37</p>
                <p>6000 Charleroi, Belgique</p>
                <p className="mt-2">Tél: 0478 57 66 13</p>
              </address>
            </div>
            <div>
              <h4 className="text-primary font-serif text-xl mb-4">Zone de Service</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Restaurant africain servant Charleroi et ses environs : Marcinelle, Gilly, Montignies-sur-Sambre, Jumet, Gosselies, Marchienne-au-Pont, Couillet, Hainaut.
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/30 text-sm uppercase tracking-widest">
              © {new Date().getFullYear()} Kapafrica - Restaurant Africain Charleroi. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
