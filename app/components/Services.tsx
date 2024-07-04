import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  return (
    <section className="py-[91px]" id="services">
      <div className="grid grid-cols-[40%,60%] sm:grid-cols-1">
        <ServiceCard number="01" service="Front-end Development" />

        <div className="border border-white/35 flex flex-col justify-between items-start px-6 py-3 h-[358px] sm:order-1">
          <h3 className="text-white text-4xl tracking-[-1px] font-semibold">
            Services
          </h3>
          <p className="text-white text-2xl font-medium">
            {
              "Crafting Intuitive User Experiences to Building Secure and Scalable Applications"
            }
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-2">
        <ServiceCard number="02" service="UI/UX" />
        <ServiceCard number="03" service="Website" />
        <ServiceCard number="04" service="Web App" />
        <ServiceCard number="05" service="Coding" />
      </div>
    </section>
  );
};
