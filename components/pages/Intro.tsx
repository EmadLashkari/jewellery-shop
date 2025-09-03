import Image from "next/image";

export default function Intro() {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-row">
      <Texts />
      <Images />
    </div>
  );
}

const Texts = () => {
  return (
    <section className="text-cyan-50 text-7xl flex flex-col">
      <span className="pl-10">Every</span>
      <span className="pl-20">Queen</span>
      <span className="pl-5">Desier</span>
    </section>
  );
};

const Images = () => {
  return (
    <div className="relative">
      <Image
        width={500}
        height={800}
        alt="andres-vera"
        src={"/andres-vera.png"}
      />
      <Image
        width={500}
        height={800}
        alt="andres-vera"
        src={"/kateryna-hliznitsova.png"}
      />
    </div>
  );
};
