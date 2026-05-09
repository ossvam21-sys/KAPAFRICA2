import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const boissonsData = {
  soft: [
    { title: "Jus de gingembre fait maison", price: "6.00", description: "" },
    { title: "Jus de bissap fait maison", price: "6.00", description: "" },
    { title: "Coca Cola", price: "3.00", description: "" },
    { title: "Coca Zéro", price: "3.00", description: "" },
    { title: "Sprite", price: "3.00", description: "" },
    { title: "Fanta Orange", price: "3.00", description: "" },
    { title: "Fanta Citron", price: "3.00", description: "" },
    { title: "Ice Tea Pêche", price: "3.00", description: "" },
    { title: "Schweppes Tonic", price: "3.00", description: "" },
    { title: "Schweppes Agrumes", price: "3.00", description: "" },
    { title: "Jus de Pomme", price: "3.00", description: "" },
    { title: "Jus d'Ananas", price: "3.00", description: "" },
    { title: "Minute Maid Orange", price: "3.00", description: "" },
    { title: "Eau Plate 25cl", price: "2.50", description: "" },
    { title: "Eau Plate 50cl", price: "5.00", description: "" },
    { title: "Eau Pétillante 50cl", price: "5.00", description: "" },
    { title: "Eau Plate 1L", price: "8.00", description: "" },
    { title: "Eau Pétillante 1L", price: "8.00", description: "" },
  ],
  bulles: [
    { title: "Cava", price: "24.00", description: "bouteille" },
    { title: "Prosecco", price: "24.00", description: "bouteille" },
    { title: "Champagne", price: "60.00", description: "bouteille" },
  ],
  bieres: [
    { title: "Jupiler", price: "3.00", description: "" },
    { title: "Leffe Blonde", price: "4.50", description: "" },
    { title: "Leffe Brune", price: "4.50", description: "" },
    { title: "Rodenbach", price: "3.50", description: "" },
    { title: "Chimay Bleue", price: "5.00", description: "" },
    { title: "Chimay Blanche", price: "5.00", description: "" },
    { title: "Orval", price: "5.00", description: "" },
    { title: "Heineken", price: "3.50", description: "" },
    { title: "Guinness", price: "4.50", description: "" },
    { title: "Desperados", price: "4.00", description: "" },
  ],
  bieresAfricaines: [
    { title: "Simba (blonde)", price: "4.50", description: "" },
    { title: "Becks", price: "4.50", description: "" },
  ],
  aperitifs: [
    { title: "Apérol Spritz", price: "8.50", description: "" },
    { title: "Martini Rouge", price: "7.00", description: "" },
    { title: "Martini Blanc", price: "7.00", description: "" },
    { title: "Porto Rouge", price: "6.50", description: "" },
    { title: "Porto Blanc", price: "6.50", description: "" },
    { title: "Pineau des Charentes", price: "6.50", description: "" },
    { title: "Johnnie Walker Red Label", price: "7.00", description: "" },
    { title: "Jack Daniels", price: "7.50", description: "" },
    { title: "Chivas Regal", price: "8.00", description: "" },
    { title: "Gin Orange ou Tonic", price: "8.00", description: "" },
    { title: "Kir Vin Blanc", price: "7.00", description: "" },
    { title: "Kir Royal", price: "8.00", description: "" },
    { title: "Prosecco Flûte", price: "7.00", description: "" },
    { title: "Verre de Vin Rosé", price: "6.00", description: "" },
    { title: "Verre de Vin Blanc", price: "6.00", description: "" },
  ],
  cocktails: [
    { title: "Apéritif Maison", price: "7.00", description: "Rhum des Antilles, jus de gingembre et jus d'ananas" },
    { title: "L'Aphrodisiaque", price: "8.00", description: "Rhum infusé clous de girofle, sirop passion, jus de gingembre maison, menthe fraîche" },
  ],
};

const menuData = {
  entrees: {
    froides: [
      { title: "Tagliata d'Avocat Tropical aux Scampis", price: "16.50", description: "" },
      { title: "Salade de Rouget et Calamar à la Mauricienne", price: "17.00", description: "" },
    ],
    chaudes: [
      { title: "Samoussa de Boeuf", price: "12.50", description: "" },
      { title: "Accras Aller-Retour (Beignets de Thon, Sardinne)", price: "13.50", description: "" },
      { title: "Bâtonnets de Calamars Frits et Sauce Tartare Maison", price: "16.50", description: "" },
      { title: "Scampis à l'Ail", price: "16.50", description: "" },
      { title: "Scampis Kapaprica", price: "17.50", description: "" },
    ],
  },
  mer: [
    { title: "Dorade XL Grillée aux Épices Africaines", price: "27.00", description: "" },
    { title: "Dorade Grillée aux Épices Africaines", price: "25.00", description: "" },
    { title: "Tilapia Grillé aux Épices Africaines", price: "24.00", description: "" },
  ],
  terre: [
    { title: "Filet de Poulet Grillé Nature", price: "16.50", description: "" },
    { title: "Filet de Poulet Grillé Sauce Cacahuètes", price: "17.50", description: "" },
    { title: "Filet de Poulet Grillé Yassa", price: "17.50", description: "" },
    { title: "Ailes de Poulet Grillées", price: "15.00", description: "" },
    { title: "Brochettes d'Agneau Tabaski", price: "21.00", description: "" },
    { title: "Chèvre Grillé Kapafrica", price: "20.00", description: "" },
    { title: "Entrecôte de Boeuf Irlandais Grillée (250gr)", price: "27.00", description: "Sauce aux trois poivres ou Archiduc" },
    { title: "Suprême de Pintade Sauce Graines", price: "22.00", description: "" },
  ],
  mijotes: [
    { title: "Yassa de Poulet (Cuisse)", price: "20.00", description: "" },
    { title: "Yassa de Poulet (Filet)", price: "18.00", description: "" },
    { title: "Boeuf, Sauce Cacahuètes et Riz Blanc Parfumé", price: "19.00", description: "" },
    { title: "Boeuf, Feuilles de Patates Douces et Épinards", price: "19.00", description: "" },
    { title: "Boeuf, Sauce Gombo", price: "19.00", description: "" },
    { title: "Boeuf, Sauce Graines (Moambé Foutou Banane)", price: "20.00", description: "" },
    { title: "Saka Saka de Boeuf", price: "19.00", description: "" },
  ],
  desserts: [
    { title: "Carpaccio d'Ananas", price: "9.50", description: "Boule Passion ou Citron Vert" },
    { title: "Assortiment de Sorbets (3 Boules)", price: "7.00", description: "Passion/Mangue, Citron Vert, Banane, Ananas, Pomme/Fraise" },
    { title: "Banane Flambée au Vieux Rhum et sa Boule Vanille", price: "11.00", description: "" },
  ],
  enfants: [
    { title: "Menu Enfant", price: "13.00", description: "Un soft, un plat enfant au choix, une glace 1 boule" },
    { title: "Filet de Poulet Grillé", price: "9.00", description: "" },
    { title: "Ailes de Poulet Grillées", price: "9.00", description: "" },
    { title: "Nuggets de Poulet", price: "9.00", description: "" },
  ],
};

const MenuItem = ({ item }: { item: { title: string; price: string; description: string } }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group border-b border-white/5 pb-5 last:border-0"
  >
    <div className="flex justify-between items-baseline gap-4">
      <h3 className="text-sm sm:text-base font-serif text-white group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
      <span className="text-primary font-semibold text-sm sm:text-base shrink-0">{item.price}€</span>
    </div>
    {item.description && (
      <p className="text-white/40 text-xs mt-1 italic">{item.description}</p>
    )}
  </motion.div>
);

const SectionTitle = ({ label }: { label: string }) => (
  <div className="relative flex items-center gap-3 mb-4">
    <div className="flex-1 h-px bg-primary/20" />
    <span className="text-primary/80 text-[10px] uppercase tracking-[0.25em] font-medium">{label}</span>
    <div className="flex-1 h-px bg-primary/20" />
  </div>
);

export function FullMenu() {
  return (
    <section id="menu" className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary uppercase tracking-[0.2em] text-sm">Gastronomie</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6 text-white">La Carte</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <Tabs defaultValue="entrees" className="w-full max-w-4xl mx-auto">
          <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-3 bg-transparent mb-8 sm:mb-12">
            {[
              { value: "entrees", label: "Entrées" },
              { value: "mer", label: "Mer" },
              { value: "terre", label: "Terre" },
              { value: "mijotes", label: "Mijotés" },
              { value: "desserts", label: "Desserts" },
              { value: "enfants", label: "Junior" },
              { value: "boissons", label: "Boissons" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="bg-transparent border border-white/10 text-white/60 uppercase tracking-wider px-3 sm:px-5 py-2 text-[10px] sm:text-xs data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:border-primary transition-all rounded-none"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="bg-zinc-900/30 p-4 sm:p-8 border border-white/5 backdrop-blur-sm relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/50" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/50" />

            {/* ENTRÉES */}
            <TabsContent value="entrees" className="space-y-6 mt-0">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-serif text-primary mb-1">Entrées</h3>
                <p className="text-white/50 text-xs italic">Pour bien commencer le voyage</p>
              </div>
              <div className="space-y-4">
                <SectionTitle label="Entrées Froides" />
                {menuData.entrees.froides.map((item, i) => <MenuItem key={i} item={item} />)}
              </div>
              <div className="space-y-4 pt-2">
                <SectionTitle label="Entrées Chaudes" />
                {menuData.entrees.chaudes.map((item, i) => <MenuItem key={i} item={item} />)}
              </div>
            </TabsContent>

            {/* MER */}
            <TabsContent value="mer" className="space-y-6 mt-0">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-serif text-primary mb-1">Plats Côté Mer</h3>
                <p className="text-white/50 text-xs italic">Fraîcheur et épices océaniques</p>
              </div>
              {menuData.mer.map((item, i) => <MenuItem key={i} item={item} />)}
            </TabsContent>

            {/* TERRE */}
            <TabsContent value="terre" className="space-y-6 mt-0">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-serif text-primary mb-1">Plats Côté Terre</h3>
                <p className="text-white/50 text-xs italic">Grillades savoureuses et viandes tendres</p>
              </div>
              {menuData.terre.map((item, i) => <MenuItem key={i} item={item} />)}
              <div className="mt-6 border border-primary/20 p-4 bg-primary/5">
                <p className="text-white/60 text-[11px] text-center uppercase tracking-widest mb-2 font-medium">Nos Accompagnements</p>
                <p className="text-white/50 text-xs text-center">Accompagnements au choix <span className="text-primary font-semibold">GRATUIT</span></p>
                <p className="text-white/40 text-xs text-center mt-1">Supplément <span className="text-white/60">+3.50€</span> : Alloco (Banane Plantain) ou Atiéké (Semoule de Manioc)</p>
                <p className="text-white/40 text-xs text-center mt-1">Extra <span className="text-white/60">+5.00€</span> : Saka Saka</p>
              </div>
            </TabsContent>

            {/* MIJOTÉS */}
            <TabsContent value="mijotes" className="space-y-6 mt-0">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-serif text-primary mb-1">Nos Plats Mijotés</h3>
                <p className="text-white/50 text-xs italic">Traditions mijotées avec amour</p>
              </div>
              {menuData.mijotes.map((item, i) => <MenuItem key={i} item={item} />)}
            </TabsContent>

            {/* DESSERTS */}
            <TabsContent value="desserts" className="space-y-6 mt-0">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-serif text-primary mb-1">Nos Desserts</h3>
                <p className="text-white/50 text-xs italic">Douceurs exotiques pour finir en beauté</p>
              </div>
              {menuData.desserts.map((item, i) => <MenuItem key={i} item={item} />)}
            </TabsContent>

            {/* JUNIOR */}
            <TabsContent value="enfants" className="space-y-6 mt-0">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-serif text-primary mb-1">Hakuna Matata Junior</h3>
                <p className="text-white/50 text-xs italic">Pour nos petits explorateurs</p>
              </div>
              {menuData.enfants.map((item, i) => <MenuItem key={i} item={item} />)}
            </TabsContent>

            {/* BOISSONS */}
            <TabsContent value="boissons" className="space-y-8 mt-0">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-serif text-primary mb-1">Nos Boissons</h3>
                <p className="text-white/50 text-xs italic">Softs, bières, bulles, apéritifs & cocktails</p>
              </div>

              <div className="space-y-3">
                <SectionTitle label="Boissons Soft" />
                {boissonsData.soft.map((item, i) => <MenuItem key={i} item={item} />)}
              </div>

              <div className="space-y-3">
                <SectionTitle label="Les Bulles (bouteille)" />
                {boissonsData.bulles.map((item, i) => <MenuItem key={i} item={item} />)}
              </div>

              <div className="space-y-3">
                <SectionTitle label="Bières" />
                {boissonsData.bieres.map((item, i) => <MenuItem key={i} item={item} />)}
              </div>

              <div className="space-y-3">
                <SectionTitle label="Bières Africaines" />
                {boissonsData.bieresAfricaines.map((item, i) => <MenuItem key={i} item={item} />)}
              </div>

              <div className="space-y-3">
                <SectionTitle label="Apéritifs" />
                {boissonsData.aperitifs.map((item, i) => <MenuItem key={i} item={item} />)}
              </div>

              <div className="space-y-3">
                <SectionTitle label="Les Cocktails" />
                {boissonsData.cocktails.map((item, i) => <MenuItem key={i} item={item} />)}
              </div>
            </TabsContent>
          </div>
        </Tabs>

        {/* Menu Découverte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-8 border border-primary/40 bg-primary/5 backdrop-blur-sm p-6 sm:p-8 relative"
        >
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary" />
          <div className="text-center mb-4">
            <h3 className="text-xl sm:text-2xl font-serif text-primary uppercase tracking-widest">Menu Découverte Africaine</h3>
            <p className="text-3xl font-serif text-white mt-2">42€ <span className="text-base font-light text-white/50">/ pers.</span></p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-4">
            {[
              { step: "Entrée", detail: "Une entrée au choix" },
              { step: "Plat", detail: "Plats au choix dans les plats mijotés, accompagné de riz parfumé" },
              { step: "Dessert", detail: "Un dessert au choix" },
            ].map((s) => (
              <div key={s.step} className="border border-white/10 p-4">
                <p className="text-primary text-xs uppercase tracking-[0.2em] font-medium mb-2">{s.step}</p>
                <p className="text-white/60 text-xs leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
