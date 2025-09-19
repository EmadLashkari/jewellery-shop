import Link from "next/link";

export function Footer() {
  return (
    <div className="w-full h-screen bg-secondery bg-[url(/noise.svg)] flex flex-col justify-between items-center">
      <section className="w-full h-full flex flex-row justify-center items-center text-white text-center font-darkerGrotesque text-7xl">
        <h2>Let Get Know EachOther</h2>
      </section>

      <section className="w-full h-auto flex flex-col md:flex-row justify-between items-center border-y-[1px] border-white text-white">
        <div className="w-full flex flex-col justify-center items-center p-4 gap-5  text-3xl border-white">
          <Link
            href={"#contact"}
            className="w-full pb-2 text-center border-b-[2px] border-white"
          >
            CONTACT
          </Link>
          <Link
            href={"#about"}
            className="w-full pb-2 text-center border-b-[2px] border-white"
          >
            ABOUT
          </Link>
          <Link
            href={"#products"}
            className="w-full pb-2 text-center border-b-[2px] border-white"
          >
            PRODUCTS
          </Link>
        </div>
        <div className="w-full font-darkerGrotesque p-4 md:border-l-2 md:h-full flex flex-col justify-center md:justify-end items-center md:items-start">
          <h3 className="text-4xl">Contact Us</h3>
          <div className="flex flex-row justify-center items-center gap-5 text-3xl">
            <Link href={""}>Instagram</Link>
            <Link href={""}>LinkedIn</Link>
            <Link href={""}>GitHub</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
