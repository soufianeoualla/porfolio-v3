import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Technologies } from "./components/Technologies";

export default function Home() {
  return (
    <>
      <div className="max-w-[1180px] mx-auto sm:px-4">
        <Header />
        <Hero />
        <Services />
      </div>
      <div className="bg-neutral-950 pt-20 pb-48 sm:pb-20 mt-28 sm:mt-8   sm:px-4" id="work">
        <Projects />
      </div>
      <div className=" bg-[#F3F3F3] rounded-t-[110px] sm:rounded-[70px]  py-20  sm:px-4">
        <Technologies />
      </div>
      <div className="bg-neutral-950  sm:px-4" id="contact">
        <ContactForm />
      </div>
      <div className="bg-indigo-600  sm:px-4">
        <Footer />
      </div>
    </>
  );
}
