import Image from "next/image";
import Link from "next/link";
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
} from "./const";

const Recruitment = () => {
  return (
    <div className="mb-8 flex flex-col ">
      <section className="mb-8 flex justify-center ">
        <Image
          src="/assets/recrutari.png"
          width="500"
          height="500"
          alt="Mici bere si manele"
        />

        <div className="px-16 flex flex-col gap-8">
          <p>{INTRO}</p>
          <div className=" flex flex-col gap-8">
            <h2 className="text-red-400 text-2xl font-bold mb-2">
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
            <h2 className="text-red-400 text-2xl font-bold mb-2">
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
      </section>

      <section className="mb-8 flex ">
        <div className="flex flex-col gap-8">
          <h2 className="text-red-400 text-2xl font-bold mb-2">
            {APLICA_TITLU}
          </h2>
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
      </section>
    </div>
  );
};

export default Recruitment;
