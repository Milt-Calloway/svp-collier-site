import React from 'react';
import './App.css';

export default function CollierMVP() {
  return (
    <div className="font-roboto text-[#000000] bg-[#FFFFFF]">

      {/* Header with Logo */}
      <header className="py-4 px-6 md:px-20 bg-white text-center">
        <img src="/assets/Logo_Southern Venture Partners_H_Green.svg" alt="SVP Logo" className="h-12 md:h-16 mx-auto" />
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-[90vh] flex items-center justify-center text-white text-center px-4" style={{ backgroundImage: 'url(https://southvp.com/wp-content/uploads/2023/03/collier2.jpg)' }}>
        <div className="bg-[#000000]/70 p-6 rounded-2xl shadow-xl max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Live in History. Love Where You Land.</h1>
          <p className="text-lg md:text-xl mb-6">Boutique lofts in the heart of Barnesville, GA — spacious, walkable, and full of character.</p>
          <a href="#tour" className="bg-[#669089] text-white px-6 py-3 rounded-xl shadow hover:bg-[#7ca39d]">Schedule a Tour</a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-[#FFFFFF]">
        <h2 className="text-3xl font-playfair font-bold mb-6 text-[#000000]">Welcome to The Historic Collier</h2>
        <p className="text-lg leading-relaxed max-w-3xl text-[#7C7C7C]">
          Originally built in 1905 and thoughtfully reimagined by Southern Venture Partners, The Historic Collier blends century-old charm with modern finishes.
          Choose from studio, 1BR, and 2BR lofts — each with soaring ceilings, exposed brick, hardwood-style flooring, and oversized windows.
        </p>
      </section>

      {/* Lifestyle Section */}
      <section className="bg-[#f6f5f3] py-16 px-6 md:px-20">
        <h2 className="text-3xl font-playfair font-bold mb-6 text-[#000000]">Life in Barnesville</h2>
        <p className="max-w-3xl text-lg mb-6 text-[#7C7C7C]">
          Located just 60 minutes south of Atlanta, Barnesville offers a small-town feel with big character: weekend farmer’s markets, walkable cafés, beautiful parks,
          and access to Gordon State College. Come for the history — stay for the community.
        </p>
        <ul className="list-disc pl-6 text-lg text-[#000000]">
          <li>Walk to downtown restaurants & shops</li>
          <li>5-minute drive to Gordon State College</li>
          <li>45-minute scenic drive to Macon</li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 md:px-20 bg-[#FFFFFF]">
        <h2 className="text-3xl font-playfair font-bold mb-8 text-[#000000]">Explore the Lofts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="https://southvp.com/wp-content/uploads/2023/03/collier1.jpg" alt="Loft Image 1" className="rounded-2xl shadow" />
          <img src="https://southvp.com/wp-content/uploads/2023/03/collier2.jpg" alt="Loft Image 2" className="rounded-2xl shadow" />
          <img src="https://southvp.com/wp-content/uploads/2023/03/collier5.jpg" alt="Loft Image 3" className="rounded-2xl shadow" />
        </div>
      </section>

      {/* Tour Call to Action */}
      <section id="tour" className="bg-[#000000] text-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-playfair font-bold mb-4">Ready to Move In?</h2>
        <p className="text-lg mb-6">Book a virtual or in-person tour today. We’ll show you what makes Collier special.</p>
        <a href="mailto:leasing@southvp.com" className="bg-[#669089] text-white px-6 py-3 rounded-xl shadow hover:bg-[#7ca39d]">Email Us to Book a Tour</a>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] text-[#7C7C7C] py-6 px-6 md:px-20 text-sm text-center">
        <div className="mb-4">
          <img src="/assets/Logo_Southern Venture Partners_H_White.svg" alt="SVP Logo White" className="h-10 mx-auto" />
        </div>
        &copy; {new Date().getFullYear()} Southern Venture Partners • Barnesville, GA • <a href="mailto:leasing@southvp.com" className="underline">leasing@southvp.com</a>
      </footer>

    </div>
  );
}
