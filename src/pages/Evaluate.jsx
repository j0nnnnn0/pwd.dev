import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GiChoice } from "react-icons/gi";

const Evaluate = () => {
  // TODO: Implement the gsap timeline
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });
  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      duration: 2,
      ease: "power1.inOut",
      rotation: 360,
      borderRadius: "100%",
    });
    
    timeline.to("#yellow-box", {
      y: 250,
      duration: 2,
      ease: "back.inOut",
      scale: 1.5,
      borderRadius: "100%",
      rotation: 360,
    }),

    timeline.to("#yellow-box", {
      x: 500,
      duration: 2,
      ease: "back.inOut",
      scale: 2,
      borderRadius: "8px",
      rotation: 720,
    }),
      [];
  });

  return (
    <main>
      <h1 className="flex text-2xl font-bold text-zinc-300">
        <span className="flex mr-1">
          <GiChoice className="w-10 h-10 text-zinc-300" />
        </span>
        Evaluate
      </h1>
      <p className="mt-3 text-zinc-400">
        Imagine you're navigating through a maze of folders, and you lose track
        of your location:<code>pwd.dev</code>is like having a GPS that tells you
        exactly where you are and <code>where you want to be.</code>
      </p>

      <p className="mt-5 text-gray-500">
        <code>pwd</code> helps you evaluate your path.
      </p>

      <div className="mt-20 space-y-10">
        <button onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}>Play/Pause</button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default Evaluate;
