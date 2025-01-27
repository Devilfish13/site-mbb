import Image from "next/image";
import React from "react";

const Gallery = () => {
    return (
        <section id="gallery" className="mb-8">
            <h2 className="text-red-400 text-2xl font-bold mb-2">Galerie</h2>
            <Image  src="/assets/powermici.png" width="550" height="550" alt='World of Warcraft tavern with mici, bere, and manele vibes' />
            <p className="mt-4">Momentan, adunăm cele mai epice poze din Azeroth. Trimite-ne screenshot-uri și momente epice!</p>
          </section>
);
}

export default Gallery;