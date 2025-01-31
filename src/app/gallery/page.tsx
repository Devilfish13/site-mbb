"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import communityVideos from './const'; // Import the video data

// Ex. datele timeline-ului
const timelineData = [
  {
    side: "left",
    title: "Ulgrax the Devourer",
    date: "2024-09-19",
    bgImage: "/assets/ulgrax.jpg",
    desc: "Pulls: 7",
    bottomRightDesc: "No vod",
  },
  {
    side: "right",
    title: "The Bloodbound Horror",
    date: "2024-09-22",
    bgImage: "/assets/bloodbound.jpeg",
    desc: "Pulls: 23",
    bottomRightDesc: "No vod",
  },
  {
    side: "left",
    title: "Sikran",
    date: "2024-09-24",
    bgImage: "/assets/sikran.jpg",
    desc: "Pulls: 33",
    bottomRightDesc: "No vod",
  },
  {
    side: "right",
    title: "Rasha'nan",
    date: "2024-08-02",
    bgImage: "/assets/rashanan.jpg",
    desc: "Pulls: 34",
    bottomRightDesc: "No vod",
  },
  {
    side: "left",
    title: "Broodtwister Ovi'nax",
    date: "2024-08-17",
    bgImage: "/assets/broodtwister.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=iHXtgoHyMBg",
    desc: "Pulls: 82",
    bottomRightDesc: "",
  },
  {
    side: "right",
    title: "Nexus-Princess Ky'veza",
    date: "2024-09-06",
    bgImage: "/assets/kyveza.jpg",
    youtubeLink: "https://youtu.be/nFnksB5JoGw",
    desc: "Pulls: 63",
    bottomRightDesc: "",
  },
  {
    side: "left",
    title: "The Silken Court",
    date: "2024-12-18",
    bgImage: "/assets/silken_court.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=gn1U8t98exo",
    desc: "Pulls: 320",
    bottomRightDesc: "",
  },
  {
    side: "right",
    title: "Queen Ansurek",
    date: "2025-01-29",
    bgImage: "/assets/queen.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=QQQQQQQQ",
    desc: "Pulls: 173",
    bottomRightDesc: "VOD INC",
  },
];

// Header component pentru raid section
function RaidHeader({
  showTimeline,
  setShowTimeline,
}: {
  showTimeline: boolean;
  setShowTimeline: (show: boolean) => void;
}) {
  return (
    <div className="relative mb-6" style={{ width: "1200px", marginLeft: "auto", marginRight: "auto" }}>
      {/* Container fix pentru imagine */}
      <div className="w-full h-70" style={{ maxWidth: "100%" }}>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/guild.jpg')",
            position: "absolute",
            left: "0",
            right: "0",
            backgroundPosition: "0% 45%",
          }}
        />
      </div>

      {/* Overlay pentru text și click handler */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-opacity-40 cursor-pointer"
        style={{ paddingTop: "200px" }}
        onClick={() => setShowTimeline(!showTimeline)}
      >
        <h1 className="text-3xl font-bold flex items-center gap-2 text-white">
          Nerubar Palace
          {showTimeline ? <FaChevronUp /> : <FaChevronDown />}
        </h1>
      </div>
    </div>
  );
}

// Componenta principală
export default function TabsWithSlider() {
  const [activeTab, setActiveTab] = useState<"raids" | "community">("raids");

  return (
    <div className="bg-neutral-900 text-white min-h-screen py-8 px-4">
      {/* Slider tabs: RAIDURI / COMUNITATE */}
      <div className="flex justify-center mb-6">
        <div className="relative w-64 h-10 bg-neutral-700 rounded-full flex items-center overflow-hidden">
          {/* Segment galben */}
          <div
            className={`
              absolute top-0 bottom-0 w-1/2 bg-yellow-600 
              rounded-full transition-transform
              ${activeTab === "community" ? "translate-x-full" : "translate-x-0"}
            `}
          />
          {/* Buton stânga (RAIDURI) */}
          <button
            onClick={() => setActiveTab("raids")}
            className="relative w-1/2 text-center text-sm font-bold z-10"
          >
            RAIDURI
          </button>
          {/* Buton dreapta (COMUNITATE) */}
          <button
            onClick={() => setActiveTab("community")}
            className="relative w-1/2 text-center text-sm font-bold z-10"
          >
            COMUNITATE
          </button>
        </div>
      </div>

      {/* Conținutul dinamic */}
      {activeTab === "raids" ? <RaidTimeline /> : <CommunitySection />}
    </div>
  );
}

// RAID TIMELINE
function RaidTimeline() {
  const [showTimeline, setShowTimeline] = useState(true);

  return (
    <div className="flex justify-center">
      {/* Container card */}
      <div
        className={`
          w-full max-w-7xl 
          ${showTimeline ? 'border border-gray-700 rounded-lg shadow-lg transition-all duration-300' : ''}
        `}
      >
        <RaidHeader showTimeline={showTimeline} setShowTimeline={setShowTimeline} />

        {/* Renderizăm timeline-ul doar dacă showTimeline = true */}
        {showTimeline && (
          <div className="relative flex w-full pb-[120px] p-6">
            {/* Linie galbenă pe mijloc */}
            <div className="absolute left-1/2 top-0 bottom-0 flex justify-center">
              <div className="border-l-4 border-yellow-500"></div>
            </div>

            {/* Stânga */}
            <div className="w-1/2 pr-8 flex flex-col gap-12">
              {timelineData
                .filter((item) => item.side === "left")
                .map((item, idx) => (
                  <TimelineBanner key={idx} data={item} side="left" bottomRightDesc={item.bottomRightDesc} />
                ))}
            </div>

            {/* Dreapta */}
            <div className="w-1/2 pl-8 flex flex-col gap-12">
              {timelineData
                .filter((item) => item.side === "right")
                .map((item, idx) => (
                  <TimelineBanner key={idx} data={item} side="right" bottomRightDesc={item.bottomRightDesc} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// COMUNITATE
function CommunitySection() {
  return (
    <div className="flex flex-col items-start w-full">
      {/* Text section */}
      <div className="mb-6 max-w-6xl">
        <h1 className="text-3xl font-bold mb-2">Comunitate</h1>

        {/* Descriere sub titlu */}
        <div className="text-gray-300 mb-6 text-center sm:text-left px-4 space-y-4">
          <p>
            📢 <strong>Comunitatea MB&M – Acolo unde legenda prinde viață!</strong> 🎥🔥
          </p>
          <p>
            MB&M nu este doar o simplă guildă – este o <strong>frăție de eroi, comedieni de wipe-uri și maeștri ai grătarului</strong>! 
            Pe această pagină vei găsi <strong>cele mai tari momente</strong> din aventurile noastre:
          </p>

          <hr className="border-gray-600" />

          <div className="space-y-2">
            <div>
              ✅ <strong>Reușite epice</strong>  
              <br />
              🔹 Boss kills de neuitat, coordonare impecabilă și momente în care ne depășim limitele.
            </div>
            <div>
              😂 <strong>Fail-uri legendare</strong>  
              <br />
              🔹 Pentru că orice guildă adevărată știe că un wipe bun devine o poveste și mai bună.
            </div>
            <div>
              🎭 <strong>Momente funny</strong>  
              <br />
              🔹 De la glume pe Discord, la greșeli haioase în raid, nimeni nu scapă de "hall of fame-ul" MB&M!
            </div>
            <div>
              🎬 <strong>Clipuri și montaje</strong>  
              <br />
              🔹 Cele mai spectaculoase și amuzante faze direct din Azeroth, cu soundtrack-ul nostru preferat de fundal.
            </div>
          </div>

          <hr className="border-gray-600" />

          <p>
            Aici sărbătorim <strong>nu doar victoriile</strong>, ci și <strong>drumul până la ele</strong>.
          </p>
          <p>
            🛡️ Fiecare raid este o experiență.  
            <br />
            💀 Fiecare wipe este o lecție.  
            <br />
            🏆 Fiecare reușită merită împărtășită!
          </p>
          <p>
            📌 <strong>Rămâi aproape!</strong> Postăm frecvent conținut, așa că nu uita să verifici pagina pentru cele mai noi momente marca <strong>MB&M – Mici, Bere și Manele!</strong> 🍻⚔️🔥
          </p>
        </div>
      </div>

      {/* Video section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full px-10 max-w-8xl">
        {communityVideos.map((video, index) => (
          <div
            key={index}
            className="w-full h-0 pb-[56.25%] relative rounded-md overflow-hidden shadow-lg"
          >
            <iframe
              src={video.embedUrl}
              title={video.title}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// BANNER RAIDS
function TimelineBanner({
  data,
  side,
  bottomRightDesc,
}: {
  data: any;
  side: "left" | "right";
  bottomRightDesc: string;
}) {
  const { title, date, bgImage, youtubeLink, desc } = data;

  return (
    <div className={`relative ${side === "right" ? "mt-[100px] mb-[-100px]" : ""}`}>
      <div
        className={`absolute top-4 w-4 h-4 rounded-full bg-yellow-500 border-2 border-neutral-900 ${
          side === "left" ? "-right-6" : "-left-6"
        }`}
      />
      <a
        href={youtubeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-neutral-800 rounded-md shadow-md overflow-hidden"
      >
        <div
          className="relative w-full h-48 bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImage}')` }}
        >
          <div className="absolute inset-0 bg-opacity-30"></div>
        </div>
        <div className="p-2">
          <h2 className="text-xl font-bold text-yellow-400">{title}</h2>
          <p className="text-sm text-gray-300 mt-1">{date}</p>
          {desc && <p className="mt-2 text-sm">{desc}</p>}
        </div>
      </a>
      {/* New description on the bottom right */}
      <div className="absolute bottom-2 right-2 bg-opacity-50 text-white text-sm p-2 rounded">
        {bottomRightDesc}
      </div>
    </div>
  );
}
