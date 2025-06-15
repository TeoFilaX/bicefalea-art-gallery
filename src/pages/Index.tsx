
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Download, Eye } from 'lucide-react';

const Index = () => {
  const [visibleArtworks, setVisibleArtworks] = useState<number[]>([]);

  const artworks = [
    {
      id: 1,
      title: "El Mensón",
      technique: "Óleo sobre lienzo",
      dimensions: "44 x 80 cm",
      year: "2023",
      image: "/api/placeholder/400/500",
      description: "Una exploración de la dualidad entre la figura humana y la naturaleza.",
      slug: "el-menson"
    },
    {
      id: 2,
      title: "Sol y Luna",
      technique: "Óleo sobre lienzo", 
      dimensions: "55 x 90 cm",
      year: "2023",
      image: "/api/placeholder/400/500",
      description: "Dualidad entre el día y la noche en una composición de luz y sombra.",
      slug: "sol-y-luna"
    },
    {
      id: 3,
      title: "Bicefálea",
      technique: "Terracota blanca",
      dimensions: "111 cm altura",
      year: "2023", 
      image: "/api/placeholder/400/500",
      description: "Escultura que explora la dualidad y simetría a través de una figura bicefálica.",
      slug: "bicefalea"
    },
    {
      id: 4,
      title: "Quinto Elemento",
      technique: "Técnica mixta",
      dimensions: "Dimensiones variables",
      year: "2023",
      image: "/api/placeholder/400/500",
      description: "Exploración de la quinta esencia más allá de los elementos clásicos.",
      slug: "quinto-elemento"
    },
    {
      id: 5,
      title: "Prueba 5",
      technique: "Óleo sobre lienzo",
      dimensions: "80 x 65 cm", 
      year: "2023",
      image: "/api/placeholder/400/500",
      description: "Composición que combina formas orgánicas y geométricas.",
      slug: "prueba-5"
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
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              Exposición de pintura y escultura contemporánea que explora la dualidad, 
              la naturaleza humana y los elementos primordiales
            </p>
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
                  <p className="text-sm text-slate-500 mb-3">
                    {artwork.technique} • {artwork.dimensions} • {artwork.year}
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
            href="/portfolio.pdf"
            download
            className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            <span className="font-medium">Descargar Presentación</span>
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
