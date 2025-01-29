import Player from '@/components/Player/Player';
import { PlayerType } from '@/types/Player';

const Roster = async () => {
  const res = await fetch('http://localhost:3000/api/getRoster');
  const data = await res.json();

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

  console.log(ranged);

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
