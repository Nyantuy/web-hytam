import Hero from "@/components/Hero";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap"
});

export default function Home() {
  return (
    <main>
      <Hero>
        <div className="w-3/4 md:w-2/3">
          <h1 className="uppercase text-xs md:text-base font-bold text-[#00FF00] mb-3">Welcome To WarungHytam</h1>
          <p className={`${plusJakartaSans.className} md:text-lg lg:text-2xl font-semibold text-justify`}>
            We are group of professional peoples who are working in the field of cutting edge technology and inventing new things.
            Even though we are small group of people, we are working on big projects and we are always looking for new talents to join us.
            If you are interested in joining us, please contact us.
          </p>
          <br />
          <button className="text-xs md:text-base font-semibold p-2 border border-[#006600] hover:border-[#33ff33]">
            Contact Us
          </button>
        </div>
      </Hero>
    </main>
  );
}
