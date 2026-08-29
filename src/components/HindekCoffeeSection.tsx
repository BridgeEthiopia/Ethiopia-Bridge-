import React from 'react';
import { 
  Coffee, 
  Sparkles, 
  Flame, 
  Heart, 
  Check, 
  MessageCircle, 
  Users, 
  ShieldCheck,
  Camera
} from 'lucide-react';
import { FOUNDER_INFO } from '../data/ethiopiaData';
import { AuthenticImage } from './AuthenticImage';
import { useCustomPhotoContext } from '../context/CustomPhotoContext';

interface HindekCoffeeProps {
  onBookCeremony: (title: string) => void;
}

export const HindekCoffeeSection: React.FC<HindekCoffeeProps> = ({
  onBookCeremony,
}) => {
  const { openUploadModal } = useCustomPhotoContext();
  const steps = [
    {
      step: '01',
      title: 'Green Beans & Origins',
      description: 'Sort raw green Arabica beans while discovering single-origin profiles from Yirgacheffe, Sidama, Harar, and ancient Kafa rainforests.'
    },
    {
      step: '02',
      title: 'Charcoal Pan Roasting',
      description: 'Roast beans over charcoal embers. Guests waft the rich aromatic smoke towards themselves to receive the aromatic blessing.'
    },
    {
      step: '03',
      title: 'Mortar & Pestle Grinding',
      description: 'Pound the warm freshly roasted beans by hand using the traditional wooden Mukecha mortar and Zenezena pestle.'
    },
    {
      step: '04',
      title: 'Clay Jebena Brewing',
      description: 'Slow-brew the grounds in the black clay Jebena pot with pure water over charcoal until the fragrant steam rises.'
    },
    {
      step: '05',
      title: 'The Three Sacred Rounds',
      description: 'Drink the three traditional rounds: Abol (the first and strongest), Tona (the second, reflective brew), and Baraka (the blessing).'
    },
    {
      step: '06',
      title: 'Popcorn & Kolo Pairing',
      description: 'Enjoy freshly popped corn (fendisha) and roasted barley with peanuts (kolo) served over fresh green ceremonial grass.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#1E3A2F] text-white relative overflow-hidden" id="hindek-coffee-section">
      {/* Background Subtle Ambience */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D49A3D]/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#B85C38]/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D49A3D]/20 text-[#E5AC4D] text-xs font-bold uppercase tracking-wider border border-[#D49A3D]/40">
            <Coffee className="w-3.5 h-3.5" />
            <span>Signature Sacred Coffee Tradition</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white">
            Hindek Grandpa Coffee Experience
          </h2>

          <p className="text-lg sm:text-xl text-[#F4BE5E] italic font-serif">
            Abol • Tona • Baraka — The Soul of Ethiopian Hospitality
          </p>

          <p className="text-sm sm:text-base text-[#D9D0C1] leading-relaxed">
            Ethiopia is the birthplace of Arabica coffee (Buna). The traditional coffee ceremony 
            is an unhurried sacred ritual of connection, gratitude, and blessing passed down across generations.
          </p>
        </div>

        {/* Visual Hero & Highlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Photo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D49A3D]/40 aspect-4/5 group img-zoom-parent bg-slate-900">
              <AuthenticImage
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ethiopian_coffee_ceremony.jpg/1280px-Ethiopian_coffee_ceremony.jpg"
                alt="Traditional Ethiopian Coffee Ceremony in Jebena"
                subjectName="Traditional Ethiopian Coffee Ceremony"
                photoKey="coffeeAvatar"
                photoCategory="founder"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              <button
                type="button"
                onClick={() => openUploadModal({
                  key: 'coffeeAvatar',
                  title: 'Hindek Grandpa Coffee Ceremony',
                  category: 'founder',
                  aspectRatio: 'portrait'
                })}
                className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-xl bg-black/70 hover:bg-black/90 text-white text-xs font-bold flex items-center gap-1.5 backdrop-blur-xs border border-white/20 transition-all cursor-pointer shadow-md"
              >
                <Camera className="w-3.5 h-3.5 text-[#D49A3D]" />
                <span>Upload Ceremony Photo</span>
              </button>

              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="text-[11px] font-bold text-[#E5AC4D] uppercase tracking-wider">
                  The Sacred Jebena
                </span>
                <p className="text-sm font-semibold">
                  Handmade black clay pot pouring pure Ethiopian Arabica into delicate Cini cups without disturbing settled grounds.
                </p>
              </div>
            </div>

            {/* Frankincense Aromatic Blessing Badge */}
            <div className="absolute -top-4 -left-4 bg-[#12241D] text-white p-3 rounded-2xl border border-[#D49A3D] shadow-xl flex items-center gap-2.5">
              <Flame className="w-4 h-4 text-[#D49A3D]" />
              <span className="text-xs font-bold">Frankincense & Myrrh Aroma</span>
            </div>
          </div>

          {/* Right Column: Narrative & Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                Warm + Personal + Traditional + Authentic
              </h3>
              <p className="text-xs sm:text-sm text-[#D9D0C1] leading-relaxed">
                Named in honor of Ethiopian elders and family traditions, the Hindek Grandpa Coffee Experience 
                invites you to slow down, witness the transformation from raw green bean to aromatic cup, 
                and take part in an ancient ritual that unites communities across Ethiopia.
              </p>
            </div>

            {/* 6-Step Ceremonial Flow Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {steps.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#D49A3D]">{item.step}</span>
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-[11px] text-[#C4B5A5] leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#E8E1D5]">
              <div className="flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-4 h-4 text-[#D49A3D]" />
                <span>Unhurried Sacred Ritual</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 font-semibold">
                <Users className="w-4 h-4 text-[#E5AC4D]" />
                <span>1 - 10 Guests (Personalized)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 font-semibold">
                <Coffee className="w-4 h-4 text-[#D49A3D]" />
                <span>Fresh Popcorn & Kolo Included</span>
              </div>
            </div>

            {/* Booking Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onBookCeremony('Hindek Grandpa Coffee Experience')}
                className="px-6 py-3.5 rounded-xl bg-[#D49A3D] hover:bg-[#C28B30] text-[#1E3A2F] font-bold text-xs sm:text-sm tracking-wide shadow-lg transition-all flex items-center gap-2"
                id="book-grandpa-coffee-btn"
              >
                <Coffee className="w-4 h-4" />
                <span>Book Coffee Experience</span>
              </button>

              <a
                href={`https://wa.me/${FOUNDER_INFO.whatsapp}?text=${encodeURIComponent(
                  'Hello Hindek! I would like to join the Hindek Grandpa Coffee Experience.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-[#1EBE5D] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
