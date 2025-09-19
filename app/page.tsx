import AboutUs from "@/components/pages/AboutUs";
import { Footer } from "@/components/pages/Footer";
import Intro from "@/components/pages/Intro";
import Products from "@/components/pages/Products";

export default function Home() {
  return (
    <section className="w-full h-full">
      <Intro />
      <AboutUs />
      <Products />
      <Footer />
    </section>
  );
}
