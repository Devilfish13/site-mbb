import Image from 'next/image';
import Link from 'next/link';
import recruitPic from '../../../public/assets/recrutari.png';
import {
  APLICA_P1,
  APLICA_P2,
  APLICA_P3,
  APLICA_TITLU,
  CAUTAM_1,
  CAUTAM_1_BOLD,
  CAUTAM_2,
  CAUTAM_2_BOLD,
  CAUTAM_3,
  CAUTAM_3_BOLD,
  CAUTAM_TITLE,
  INTRO,
  OFERIM_1,
  OFERIM_1_BOLD,
  OFERIM_2,
  OFERIM_2_BOLD,
  OFERIM_3,
  OFERIM_3_BOLD,
  OFERIM_4,
  OFERIM_4_BOLD,
  OFERIM_TITLE,
} from './const';

const Recruitment = () => {
  return (
    <div id="wrapper" className="mb-8 flex flex-col">
      <div className="mb-8 flex w-full flex-col items-center lg:flex-row">
        <Link
          className="relative flex w-2/3 sm:p-4 md:m-auto md:w-2/3 md:items-center lg:w-1/3 lg:p-0"
          href="https://apply.wowaudit.com/eu/tarren-mill/mici-bere-si-manele/vanzatori-de-mititei?preview"
          target="_blank"
        >
          <Image
            src={recruitPic}
            width="500"
            objectFit="contain"
            alt="Mici bere si manele recruteaza"
          />
        </Link>

        <div className="flex flex-col gap-8 lg:w-2/3 lg:px-16">
          <p>{INTRO}</p>

          <div className="flex flex-col gap-8">
            <h2 className="mb-2 text-2xl font-bold text-red-400">
              {CAUTAM_TITLE}
            </h2>
            <ul className="list-disc px-4">
              <li>
                <span className="font-bold">{CAUTAM_1_BOLD}</span>
                {CAUTAM_1}
              </li>
              <li>
                <span className="font-bold">{CAUTAM_2_BOLD}</span>
                {CAUTAM_2}
              </li>
              <li>
                <span className="font-bold">{CAUTAM_3_BOLD}</span>
                {CAUTAM_3}
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="mb-2 text-2xl font-bold text-red-400">
              {OFERIM_TITLE}
            </h2>
            <ul className="list-disc px-4">
              <li>
                <span className="font-bold">{OFERIM_1_BOLD}</span>
                {OFERIM_1}
              </li>
              <li>
                <span className="font-bold">{OFERIM_2_BOLD}</span>
                {OFERIM_2}
              </li>
              <li>
                <span className="font-bold">{OFERIM_3_BOLD}</span>
                {OFERIM_3}
              </li>
              <li>
                <span className="font-bold">{OFERIM_4_BOLD}</span>
                {OFERIM_4}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="mb-2 text-2xl font-bold text-red-400">{APLICA_TITLU}</h2>
        <p>{APLICA_P1}</p>
        <Link
          href="https://apply.wowaudit.com/eu/tarren-mill/mici-bere-si-manele/vanzatori-de-mititei?preview"
          className="text-blue-500 decoration-solid"
          target="_blank"
        >
          Aplica Aici
        </Link>
        <div>
          <p>{APLICA_P2}</p>
          <p>{APLICA_P3}</p>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
