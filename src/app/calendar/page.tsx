import React from "react";

const Calendar = () => {
    return (
        <section id="calendar" className="mb-8">
        <h2 className="text-red-400 text-2xl font-bold mb-2">Calendarul Evenimentelor</h2>
        <ul className="list-disc pl-5 ">
          <li>📅 Raid la Molten Core - Vineri, ora 20:00</li>
          <li>📅 Bătălia pentru Bere - Sâmbătă, ora 19:00</li>
          <li>📅 Karaoke cu Manele - Duminică, ora 18:00</li>
        </ul>
      </section>
);
}

export default Calendar;