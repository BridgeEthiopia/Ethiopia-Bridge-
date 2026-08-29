import React from 'react';
import { REVIEWS_DATA } from '../data/ethiopiaData';
import { Star, Quote, CheckCircle, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white" id="reviews-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E3A2F]/10 text-[#1E3A2F] text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-[#D49A3D] fill-[#D49A3D]" />
            <span>Traveler Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A2F] tracking-tight">
            What Travelers Say About <span className="text-[#B85C38] font-serif italic">Bridge Ethiopia</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5C5247] leading-relaxed">
            Authentic reviews from international travelers, cultural explorers, and food lovers 
            who explored Ethiopia with our trusted local team.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#E8E1D5] shadow-xs flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D49A3D] text-[#D49A3D]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8C7E6D] font-medium">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#423B33] leading-relaxed italic">
                  "{rev.comment}"
                </p>

                {/* Experience Tag */}
                <div className="inline-block px-3 py-1 rounded-full bg-white border border-[#E8E1D5] text-[11px] font-semibold text-[#1E3A2F]">
                  Experience: {rev.tourOrExperience}
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#E8E1D5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1E3A2F] text-white flex items-center justify-center font-serif text-sm font-bold border-2 border-[#D49A3D]">
                  {rev.authorName.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#1E3A2F] flex items-center gap-1">
                    <span>{rev.authorName}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#34A853]" />
                  </div>
                  <div className="text-[11px] text-[#8C7E6D]">{rev.authorCountry}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
