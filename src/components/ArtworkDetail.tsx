
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Ruler, Palette } from 'lucide-react';

interface ArtworkDetailProps {
  title: string;
  image: string;
  technique: string;
  dimensions: string;
  year: string;
  description: string;
}

const ArtworkDetail: React.FC<ArtworkDetailProps> = ({
  title,
  image, 
  technique,
  dimensions,
  year,
  description
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Volver a la galería</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements for artistic touch */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-40 blur-2xl"></div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-slate-900 tracking-wide">
                  {title}
                </h1>
                <div className="w-24 h-px bg-gradient-to-r from-amber-600 to-orange-600 mb-8"></div>
              </div>

              {/* Technical Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                    <Palette className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Técnica</h3>
                    <p className="text-slate-600">{technique}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <Ruler className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Dimensiones</h3>
                    <p className="text-slate-600">{dimensions}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Año</h3>
                    <p className="text-slate-600">{year}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="font-serif text-2xl font-medium mb-4 text-slate-900">
                  Descripción
                </h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {description}
                </p>
              </div>

              {/* Back Button Large */}
              <Link
                to="/"
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Volver a la galería</span>
              </Link>
            </div>
          </div>
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

export default ArtworkDetail;
