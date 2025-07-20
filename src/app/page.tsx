"use client";

import type { NextPage } from 'next';
import Head from 'next/head';

// Helper components defined within the same file
const IconFeather = ({ className }: { className?: string }) => (
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
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
    <line x1="16" y1="8" x2="2" y2="22" />
    <line x1="17.5" y1="15" x2="9" y2="15" />
  </svg>
);

const IconHeart = ({ className }: { className?: string }) => (
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
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
);

const IconStar = ({ className }: { className?: string }) => (
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
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);


const RasaDukaPage: NextPage = () => {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans">
      <Head>
        <title>Rasa & Duka</title>
        <meta name="description" content="Sebuah perjalanan melalui rasa dan duka." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920"
            alt="Pemandangan gunung berkabut"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center text-white p-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-wider">
              Rasa & Duka
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Menyelami palung hati, menemukan spektrum emosi yang menjadikan kita manusia.
            </p>
          </div>
        </section>

        {/* Tentang Rasa Section */}
        <section id="rasa" className="py-20 md:py-32 bg-slate-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif font-bold text-sky-300 mb-4">Tentang Rasa</h2>
            <p className="max-w-3xl mx-auto mb-12 text-slate-400">
              Rasa adalah bahasa jiwa. Ia hadir dalam tawa, dalam sunyi, dalam setiap detak yang kita alami. Ini adalah beberapa warnanya.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 transform hover:scale-105 transition-transform duration-300">
                <IconHeart className="w-12 h-12 mx-auto mb-4 text-red-400" />
                <h3 className="text-2xl font-bold mb-2 text-white">Euforia</h3>
                <p className="text-slate-400">
                  Puncak kegembiraan, saat dunia terasa penuh warna dan harapan. Momen singkat yang terukir abadi.
                </p>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 transform hover:scale-105 transition-transform duration-300">
                <IconFeather className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-2xl font-bold mb-2 text-white">Tenang</h3>
                <p className="text-slate-400">
                  Kedamaian dalam diri, saat riuh dunia mereda dan kita menemukan harmoni dalam kesederhanaan.
                </p>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 transform hover:scale-105 transition-transform duration-300">
                <IconStar className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-2 text-white">Rindu</h3>
                <p className="text-slate-400">
                  Sebuah ruang kosong yang terisi kenangan. Rasa manis sekaligus pahit akan sebuah kehadiran yang hilang.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ruang Duka Section */}
        <section id="duka" className="py-20 md:py-32 bg-slate-800">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1515694346937-94d85e41e682?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080"
                alt="Seseorang melihat ke luar jendela saat hujan"
                className="rounded-lg shadow-2xl object-cover w-full h-full"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <h2 className="text-4xl font-serif font-bold text-sky-300 mb-4">Ruang Duka</h2>
              <p className="text-slate-400 mb-6">
                Duka bukanlah tanda kelemahan, melainkan bukti adanya cinta. Ia adalah lembah yang harus dilalui, bukan untuk ditinggali. Di sini, kita memberi ruang bagi setiap air mata dan kehilangan.
              </p>
              <blockquote className="border-l-4 border-sky-400 pl-4 italic text-slate-300">
                "Kesedihan terbang di atas sayap waktu."
                <cite className="block not-italic mt-2 text-sm text-slate-500">- Jean de La Fontaine</cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Jalan Pulang Section */}
        <section id="pulang" className="py-20 md:py-32 bg-slate-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif font-bold text-sky-300 mb-4">Jalan Pulang</h2>
            <p className="max-w-3xl mx-auto mb-12 text-slate-400">
              Setelah badai, ada ketenangan. Setelah duka, ada penerimaan. Perjalanan pulang adalah tentang menemukan kembali diri sendiri, membawa serta setiap pelajaran dari rasa dan duka.
            </p>
            <div className="flex justify-center">
                <a
                    href="#rasa"
                    className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-400 transition-colors duration-300"
                >
                    Jelajahi Lagi
                </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-center py-8">
        <div className="container mx-auto px-6">
          <p className="text-slate-500">
            Dibuat dengan perenungan. &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RasaDukaPage;