import { PlayerType } from '@/types/Player';
import Image from 'next/image';
import Link from 'next/link';
import '../../globals.css';

interface PlayerProps {
  player: PlayerType;
}

const Player: React.FC<PlayerProps> = ({ player }) => {
  const { name, realm, role } = player;
  const playerClass = player.class;
  return (
    <Link
      href={getUrl(name, realm)}
      target="_blank"
      className="flex flex-row gap-2"
    >
      {getIcon(playerClass)}
      <div className={getClassColour(playerClass)}>{`${name}`}</div>
    </Link>
  );
};

const getClassColour = (playerClass: string) => {
  switch (playerClass) {
    case 'Death Knight':
      return 'text-death-knight';
    case 'Demon Hunter':
      return 'text-demon-hunter';
    case 'Druid':
      return 'text-druid';
    case 'Evoker':
      return 'text-evokker';
    case 'Hunter':
      return 'text-hunter';
    case 'Mage':
      return 'text-mage';
    case 'Monk':
      return 'text-monk';
    case 'Paladin':
      return 'text-paladin';
    case 'Priest':
      return 'text-priest';
    case 'Rogue':
      return 'text-rogue';
    case 'Shaman':
      return 'text-shaman';
    case 'Warlock':
      return 'text-warlock';
    case 'Warrior':
      return 'text-warrior';
    default:
      return 'text-white';
  }
};

const getIconPlace = (playerClass: string) => {
  switch (playerClass) {
    case 'Death Knight':
      return '/assets/death-knight.svg';
    case 'Demon Hunter':
      return '/assets/demon-hunter.svg';
    case 'Druid':
      return '/assets/druid.svg';
    case 'Evoker':
      return '/assets/evoker.svg';
    case 'Hunter':
      return '/assets/hunter.svg';
    case 'Mage':
      return '/assets/mage.svg';
    case 'Monk':
      return '/assets/monk.svg';
    case 'Paladin':
      return '/assets/paladin.svg';
    case 'Priest':
      return '/assets/priest.svg';
    case 'Rogue':
      return '/assets/rogue.svg';
    case 'Shaman':
      return '/assets/shaman.svg';
    case 'Warlock':
      return '/assets/warlock.svg';
    case 'Warrior':
      return '/assets/warrior.svg';
    default:
      return '/assets/death-knight.svg';
  }
};

const getUrl = (name: string, realm: string) =>
  `https://www.warcraftlogs.com/character/EU/${realm.replace(/\s/g, '')}/${name}`;

const getIcon = (playeClass: string) => {
  return (
    <Image
      src={getIconPlace(playeClass)}
      width={24}
      height={24}
      alt={`Icon ${playeClass}`}
    />
  );
};

export default Player;
