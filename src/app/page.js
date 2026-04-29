import Image from "next/image";
import LandingPage from "../../components/LandingPage";

export default function Home() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <div
      className="w-screen"
      style={{ position: "relative", minHeight: "100vh" }}>
      <Image
        src="/assets/stb_Main_wall_1.png"
        alt="Background Image, a shot of the bar area"
        fill
        className="object-cover object-right shadow-inner"
        // style={{ objectFit: "cover", zIndex: -1 }}
        priority
      />
      <div className="relative z-10">
        <LandingPage />
      </div>
    </div>
  );
}
