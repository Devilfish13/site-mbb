import Image from "next/image";
import {
  DESPRE_P1,
  DESPRE_P2,
  DESPRE_TITLE,
  MISIUNE_P1,
  MISIUNE_P2,
  MISIUNE_TITLE,
  VALORI_1,
  VALORI_2,
  VALORI_3,
  VALORI_TITLE,
} from "./const";

const App = () => {
  return (
    <div className="mb-8 flex flex-col ">
      <section className="mb-8 flex justify-center ">
        <Image
          src="/assets/desprenoi.png"
          width="500"
          height="500"
          alt="Mici bere si manele"
        />
        <div className="px-16 flex flex-col gap-8">
          <h2 className="text-red-400 text-2xl font-bold mb-2">
            {DESPRE_TITLE}
          </h2>
          <p>{DESPRE_P1}</p>
          <p>{DESPRE_P2}</p>
        </div>
      </section>

      <section className="mb-8 flex ">
        <div className=" flex flex-col gap-8">
          <h2 className="text-red-400 text-2xl font-bold mb-2">
            {VALORI_TITLE}
          </h2>
          <ul className="list-disc px-4">
            <li>{VALORI_1}</li>
            <li>{VALORI_2}</li>
            <li>{VALORI_3}</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 flex ">
        <div className="flex flex-col gap-8">
          <h2 className="text-red-400 text-2xl font-bold mb-2">
            {MISIUNE_TITLE}
          </h2>
          <p>{MISIUNE_P1}</p>
          <p>{MISIUNE_P2}</p>
        </div>
      </section>

      <section id="about" className="mb-8 flex justify-center "></section>
    </div>
  );
};

export default App;
