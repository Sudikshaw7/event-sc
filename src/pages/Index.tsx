import { Link } from "react-router-dom";
import SacredHeader from "@/components/SacredHeader";
import SacredFooter from "@/components/SacredFooter";
import { Calendar, MapPin, ArrowRight, ChevronRight } from "lucide-react";

const events = [
  {
    title: "Pravesh Mahotsav",
    date: "July 17, 2024",
    location: "Main Mandap, Vrindavan",
    type: "Mahotsav",
    desc: "Grand entry ceremony marking the auspicious beginning of Chaturmas with Vedic rituals and abhishek.",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_0bfa871f6c_10c36dacdfe6f5f1.png",
  },
  {
    title: "Gita Pravachan Series",
    date: "July 20–Aug 20, 2024",
    location: "Pravachan Hall",
    type: "Pravachan",
    desc: "Daily discourses on the Bhagavad Gita by Sant Shri Rameshacharyaji  Chapters 1–18.",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b6901f220d_4da96d0cac6cd524.png",
  },
  {
    title: "Purnima Bhandara",
    date: "August 19, 2024",
    location: "Open Courtyard",
    type: "Bhandara",
    desc: "Community langar and prasad distribution on the auspicious full moon day. All devotees welcome.",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ac49852b2d_6c16df7d3a84ce6c.png",
  },
  {
    title: "Vishnu Sahasranama Yagna",
    date: "September 5, 2024",
    location: "Yagna Shala",
    type: "Yagna",
    desc: "Sacred fire ritual with chanting of Vishnu Sahasranama  priests from Kashi leading the ceremony.",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_a5bfcc89db_81afbbb2a8954285.png",
  },
];

const typeBadgeColor: Record<string, string> = {
  Mahotsav: "bg-saffron text-white",
  Pravachan: "bg-gold text-white",
  Bhandara: "bg-green-600 text-white",
  Yagna: "bg-red-600 text-white",
};

const galleryItems = [
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_d9e6e0f59d_78ee6dfa296e8d79.png"},
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_83e5b1670b_ec347db49d56d22e.png"},
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_695e082726_dd9716f556652c65.png"},
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_4e538a8d9e_9b1434322a445653.png"},
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_46c2917707_bda928c0ea9e8a50.png"},
  { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_f9a03d2e35_25f45724c416517b.png"},
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SacredHeader />

      {/* Hero */}
      <section className="relative lotus-bg bg-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 to-white/90 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="text-6xl md:text-8xl font-serif text-saffron mb-4 opacity-90 leading-none">ॐ</div>
          <p className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-gold mb-4">
            ✦ Ashadha to Kartik 2024 ✦
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-brown leading-tight mb-6">
            Sanatani Chaturmas
            <span className="block text-saffron text-3xl md:text-4xl mt-2">सनातनी चातुर्मास</span>
          </h1>
          <p className="max-w-2xl mx-auto font-sans text-base md:text-lg text-brown/70 mb-10 leading-relaxed">
            Four sacred months of Pravachans, Seva, Bhandaras, and devotional gatherings.
            Join thousands of devotees in this timeless tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 bg-saffron text-white px-8 py-3 font-sans font-semibold text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors duration-150"
            >
              View All Events <ArrowRight size={16} />
            </Link>
            <Link
              to="/donation"
              className="inline-flex items-center gap-2 border border-gold text-brown px-8 py-3 font-sans font-semibold text-sm uppercase tracking-wider hover:bg-gold hover:text-white transition-colors duration-150"
            >
              Make a Donation
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "120+", label: "Days of Seva" },
              { value: "5,000+", label: "Devotees" },
              { value: "40+", label: "Pravachans" },
              { value: "₹12L+", label: "Donations" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl md:text-4xl text-saffron">{stat.value}</div>
                <div className="font-sans text-xs text-brown/60 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sant */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Portrait */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-3 border-2 border-gold opacity-60 pointer-events-none" />
                <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_22541f4bf2_fa6b804cc06bcdfd.png" alt="Indian Hindu saint spiritual leader sitting in meditation, saffron robes, peaceful expression, portr" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-brown/80 px-4 py-2 text-center">
                  <div className="font-serif text-gold text-sm">पूज्य</div>
                  <div className="font-serif text-white text-lg">Shri Rameshacharyaji</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-3">Featured Sant</p>
              <h2 className="font-serif text-3xl md:text-4xl text-brown leading-tight mb-4">
                Param Pujya<br />
                <span className="text-saffron">Shri Rameshacharyaji Maharaj</span>
              </h2>
              <p className="font-sans text-sm md:text-base text-brown/70 leading-relaxed mb-6">
                A revered scholar of Vedanta and Bhagavad Gita, Pujya Rameshacharyaji has been conducting
                Chaturmas for over three decades. His discourses blend ancient wisdom with practical
                guidance for modern seekers.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Daily Pravachan: 6:00 AM & 7:00 PM",
                  "Gita Series: 18 Adhyayas over 4 months",
                  "Personal darshan: Tuesdays & Saturdays",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-sans text-brown/80">
                    <span className="text-saffron text-base">•</span> {item}
                  </div>
                ))}
              </div>
              <Link
                to="/invitation"
                className="inline-flex items-center gap-2 border border-saffron text-saffron px-6 py-2.5 text-sm font-sans font-semibold hover:bg-saffron hover:text-white transition-colors duration-150"
              >
                View Invitation <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Cards */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-2">Sacred Programme</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown">Upcoming Events</h2>
            <div className="mt-3 flex justify-center gap-1 text-gold text-xs">❈ ❈ ❈</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {events.map((event) => (
              <div key={event.title} className="sacred-card bg-white flex flex-col overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img className="w-full h-full object-cover" src={event.img_url} />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-sans font-semibold px-2 py-0.5 ${typeBadgeColor[event.type]}`}>
                      {event.type}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-brown mb-1">{event.title}</h3>
                  <p className="text-xs font-sans text-brown/60 mb-2 flex items-center gap-1">
                    <Calendar size={11} className="text-saffron" /> {event.date}
                  </p>
                  <p className="text-xs font-sans text-brown/60 mb-3 flex items-center gap-1">
                    <MapPin size={11} className="text-saffron" /> {event.location}
                  </p>
                  <p className="text-xs font-sans text-brown/70 leading-relaxed flex-1">{event.desc}</p>
                  <Link
                    to="/events"
                    className="mt-4 text-xs font-sans font-semibold text-saffron uppercase tracking-wider hover:underline flex items-center gap-1"
                  >
                    Details <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 border border-gold text-brown px-8 py-3 font-sans text-sm font-semibold hover:bg-gold hover:text-white transition-colors duration-150"
            >
              View Full Calendar <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="bg-white py-14 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-2">Moments of Grace</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brown">Gallery</h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin" style={{ scrollbarWidth: "thin" }}>
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="shrink-0 w-56 h-40 md:w-72 md:h-52 overflow-hidden border border-gold/40 hover:border-gold transition-all duration-200"
              >
                <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src={item.img_url} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="bg-brown py-14 md:py-20 lotus-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-brown/90 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-4xl font-serif text-saffron mb-4">🪔</div>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Your Seva Matters
          </h2>
          <p className="font-sans text-white/70 text-sm md:text-base mb-8 leading-relaxed">
            Every donation  big or small  contributes to feeding thousands of devotees,
            organizing sacred events, and continuing this ancient tradition.
          </p>
          <Link
            to="/donation"
            className="inline-flex items-center gap-2 bg-saffron text-white px-10 py-3.5 font-sans font-semibold text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors duration-150"
          >
            Donate Now ❤ <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SacredFooter />
    </div>
  );
}