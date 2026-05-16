import Image from "next/image";
import LandingPage from "../../components/LandingPage";

export default function Home() {
  return (
    <div
      className="relative w-screen min-h-screen overflow-x-hidden"
      // style={{ position: "relative", minHeight: "100vh" }}
    >
      {/* Mobile / Small screens bg */}
      <Image
        src="/assets/STB/jazz_cellar_web_background_4x_upscaled copy.png"
        alt="Garleen's Jazz Cellar, a painting reminiscent of the Sugar Shack"
        sizes="10vw"
        fill
        quality={90}
        // className="object-cover object-[33%_65%] block md:hidden"
        className="object-cover object-[40%-0%] block md:hidden"
        priority
      />

      {/* Desktop / Medium and up bg */}
      <Image
        src="/assets/stb_Main_wall_1.png"
        alt="Background Image, a shot of the bar area"
        sizes="100vw"
        fill
        className="object-cover object-[78%_18%] hidden md:block"
        priority
      />
      <div className="relative z-10">
        <LandingPage />
      </div>
    </div>
  );
}
