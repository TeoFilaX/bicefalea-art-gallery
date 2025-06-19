import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Eye, ExternalLink } from 'lucide-react';

const Index = () => {
  const [visibleArtworks, setVisibleArtworks] = useState<number[]>([]);

  const artworks = [
    {
      id: 1,
      title: "La Buena Iliada",
      technique: "Óleo y spray sobre lienzo",
      dimensions: "80 x 200 cm",
      price: "3500€",
      image: "/lovable-uploads/c7989d7e-c89e-4827-9aa0-9ec76a3e0532.png",
      description: "Materializando el Cambio. Una explosión de tonos vibrantes que corporizan figuras y almas en un espacio compositivo dividido entre la transformación y los miedos arraigados.",
      slug: "la-buena-illada"
    },
    {
      id: 2,
      title: "La Batalla",
      technique: "Óleo sobre lienzo", 
      dimensions: "Marco dorado",
      price: "2400€",
      image: "/lovable-uploads/b7de8afb-5a2d-4fd6-9a38-117d101a4996.png",
      description: "Las líneas no tienen orden, sino la caótica armonía de una mente en conflicto. El lienzo arde con figuras que se entrechocan como pensamientos encarnizados en un campo de batalla sin fronteras.",
      slug: "composicion-mitologica"
    },
    {
      id: 3,
      title: "Desde el Charco",
      technique: "Técnica mixta",
      dimensions: "Dimensiones variables",
      price: "2200€",
      image: "/lovable-uploads/06fc4e8f-ae58-4e2f-a459-021f1a9d5eeb.png",
      description: "Un enigma tejido en capas de materia y sombra. Tres figuras sumergidas en un abismo oscuro, con una luz verdosa que se filtra como promesa de umbral hacia otro lado.",
      slug: "abstraccion-expresiva"
    },
    {
      id: 4,
      title: "La Caída",
      technique: "Escultura en bronce",
      dimensions: "Tríptico escultórico",
      price: "2700€",
      image: "/lovable-uploads/9e1df739-6f05-4905-8d6c-92a815cad73f.png",
      description: "Escultura que captura el momento exacto del derrumbe de las creencias. Una figura masculina derribada con la cabeza clavada en el suelo como un axis mundi quebrado.",
      slug: "figuras-en-movimiento"
    },
    {
      id: 5,
      title: "La Musa",
      technique: "Terracota blanca",
      dimensions: "111 cm de altura",
      price: "1400€",
      image: "/lovable-uploads/1056f2fa-118e-4b64-8fb2-2602ec86fc8b.png",
      description: "Una mujer erguida con gracia de musa que emerge de un sueño. Entre pliegues suaves y piel de escayola se esconde una historia de cicatrices convertidas en belleza.",
      slug: "bicefalea"
    },
    {
      id: 6,
      title: "Pastores",
      technique: "Óleo y spray sobre lienzo",
      dimensions: "Precio: 700€",
      price: "700€",
      image: "/lovable-uploads/ca2d9ab4-600e-49bd-a894-a3b38ada8c42.png",
      description: "En lo alto de la montaña, un pastor y una pastora contemplan el futuro. Un tributo a la resiliencia, al amor sencillo y a la esperanza que florece cuando dos almas miran en la misma dirección.",
      slug: "pastores"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleArtworks(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const artworkElements = document.querySelectorAll('[data-id]');
    artworkElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-slate-900 tracking-wide">
              Mario Pérez de Zabalza
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4 text-slate-800">
                Epílogo: Resiliencia
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed italic mb-4">
                "Tránsitos de Luz"
              </p>
              <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                Esta exposición no niega el dolor; lo transita. Es una muestra que recuerda: 
                incluso lo quebrado puede ser un lienzo, incluso el abismo, un taller. 
                Y al final, siempre—como en el arte, como en la vida—el amor es la forma más audaz de resistencia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {artworks.map((artwork, index) => (
            <Link
              key={artwork.id}
              to={`/obra/${artwork.slug}`}
              data-id={artwork.id}
              className={`group relative block transform transition-all duration-700 hover:scale-105 ${
                visibleArtworks.includes(artwork.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-6 h-6 text-slate-900" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl md:text-2xl font-medium mb-2 text-slate-900 group-hover:text-amber-700 transition-colors duration-300">
                    {artwork.title}
                  </h3>
                  <p className="text-lg font-semibold text-amber-600 mb-3">
                    {artwork.price}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {artwork.description}
                  </p>
                  
                  <div className="flex items-center mt-4 text-amber-600 font-medium text-sm group-hover:text-amber-700 transition-colors duration-300">
                    Ver obra
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://drive.google.com/file/d/1iGBjyTzB4zMgiQAZxRucWVB1gIRbpBer/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="font-medium">Ver Presentación</span>
          </a>
          
          <a
            href="https://www.instagram.com/mariodezabalza/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-medium">Seguir en Instagram</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mb-6"></div>
        <p className="text-slate-500 font-light tracking-wide">
          Mario Pérez de Zabalza • Diciembre 2024
        </p>
      </footer>
    </div>
  );
};

export default Index;
