import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "Nathalie Schwaenen",
    rating: 5,
    text: "Excellente cuisine préparée par la patronne qui est très accueillante et sympathique. Nous avons vraiment bien mangé. N'hésitez pas à vous y rendre !",
    date: "Avis Google"
  },
  {
    id: 2,
    name: "Maria Fox",
    rating: 5,
    text: "Que dire… un cadre super, un accueil au top, le service n'en parlons pas juste whaouuu…. Et les plats c'est une tuerie… cela frôle la gastronomie si je puis dire! En famille, en amoureux, entre amis ou même seul d'ailleurs… vous pouvez vous y rendre les yeux fermés!",
    date: "Avis Google"
  },
  {
    id: 3,
    name: "Ornella Bugli",
    rating: 5,
    text: "Si vous voulez manger africain à Charleroi c'est ici qu'il faut venir ! Tout était très bon!! Je conseille vivement le bissap et le mafé au bœuf sauce cacahuète. L'accueil, le cadre, le service, tout était parfait.",
    date: "Avis Google"
  }
];

export function ReviewsSection() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary uppercase tracking-[0.2em] text-sm">Témoignages</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">L'Expérience Kapafrica</h2>
          <div className="w-24 h-px bg-primary mx-auto" />
          <p className="text-white/60 font-light max-w-xl mx-auto">
            Découvrez ce que nos convives disent de leur voyage culinaire parmi nous.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {reviews.map((review, index) => (
              <CarouselItem key={review.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-white/5 border border-white/10 p-8 flex flex-col relative group hover:border-primary/30 transition-colors duration-300"
                  >
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-white/80 font-light italic mb-6 flex-grow leading-relaxed">
                      "{review.text}"
                    </p>

                    <div className="mt-auto pt-6 border-t border-white/5">
                      <p className="text-white font-serif text-lg">{review.name}</p>
                      <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{review.date}</p>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0 -translate-x-12 border-primary/50 text-primary hover:bg-primary hover:text-black" />
            <CarouselNext className="right-0 translate-x-12 border-primary/50 text-primary hover:bg-primary hover:text-black" />
          </div>
        </Carousel>

        <div className="mt-16 text-center">
          <a
            href="https://g.page/r/CTh-1MWi08EMEAE/review"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary pb-1 hover:border-white"
          >
            <Star className="w-4 h-4" />
            Laisser un avis sur Google
          </a>
        </div>
      </div>
    </section>
  );
}
