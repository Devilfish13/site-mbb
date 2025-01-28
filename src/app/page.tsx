import Image from "next/image";
import desprePic from "../../public/assets/desprenoi.png";
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
    <div id="wrapper" className="mb-8 flex flex-col w-full">
      <div className="mb-8 flex flex-col lg:flex-row items-center w-full">
        <div className="flex w-2/3 md:w-2/3 lg:w-1/3  md:items-centerr md:m-auto relative sm:p-4 lg:p-0">
          <Image
            src={desprePic}
            objectFit="contain"
            alt="Mici bere si manele info"
          />
        </div>
        <div className=" flex flex-col gap-8 lg:w-2/3 lg:px-16 ">
          <h2 className="text-red-400 text-2xl font-bold mb-2">
            {DESPRE_TITLE}
          </h2>
          <p>{DESPRE_P1}</p>
          <p>{DESPRE_P2}</p>
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-8 w-ful ">
        <h2 className="text-red-400 text-2xl font-bold mb-2">{VALORI_TITLE}</h2>
        <ul className="list-disc px-4">
          <li>{VALORI_1}</li>
          <li>{VALORI_2}</li>
          <li>{VALORI_3}</li>
        </ul>
      </div>

      <div className="mb-8 flex flex-col w-ful gap-8">
        <h2 className="text-red-400 text-2xl font-bold mb-2">
          {MISIUNE_TITLE}
        </h2>
        <p>{MISIUNE_P1}</p>
        <p>{MISIUNE_P2}</p>
      </div>
    </div>
  );
};

export default App;
