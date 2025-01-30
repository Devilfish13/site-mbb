import Player from '@/components/Player/Player';
import { PlayerType } from '@/types/Player';

export const dynamic = 'force-dynamic';

const absoluteUrl = () => {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/' // Localhost in development
      : 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL; // Vercel URL in production

  return baseUrl;
};

const Roster = async () => {
  const res = await fetch(absoluteUrl() + '/api/getRoster');

  const data = await res.json();

  if (data.error) {
    return <p>Failed to load roster. Please try again later.</p>;
  }

  const tanks: PlayerType[] = data.filter(
    (item: PlayerType) => item.role === 'Tank',
  );
  const healers: PlayerType[] = data.filter(
    (item: PlayerType) => item.role === 'Heal',
  );
  const melee: PlayerType[] = data.filter(
    (item: PlayerType) => item.role === 'Melee',
  );
  const ranged: PlayerType[] = data.filter(
    (item: PlayerType) => item.role === 'Ranged',
  );

  return (
    <div className="mb-8 flex flex-col gap-2 md:flex-row md:gap-8 lg:flex-row lg:gap-16">
      <div className="mb-8 flex flex-col gap-2">
        <div>Tanks</div>
        {tanks.map((d: PlayerType) => (
          <div key={d.id}>
            <Player player={d} />
          </div>
        ))}
      </div>
      <div className="mb-8 flex flex-col gap-2">
        <div>Healers</div>
        {healers.map((d: PlayerType) => (
          <div key={d.id}>
            <Player player={d} />
          </div>
        ))}
      </div>
      <div className="mb-8 flex flex-col gap-2">
        <div>Melee</div>
        {melee.map((d: PlayerType) => (
          <div key={d.id}>
            <Player player={d} />
          </div>
        ))}
      </div>
      <div className="mb-8 flex flex-col gap-2">
        <div>Ranged</div>
        {ranged.map((d: PlayerType) => (
          <div key={d.id}>
            <Player player={d} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roster;
