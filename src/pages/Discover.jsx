import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MdOutlineFindReplace } from "react-icons/md";

const Discover = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
        duration: 2,
      },
      {
        x: 250,
        yoyo: true,
        borderRadius: "100%",
        repeat: -1,
        duration: 2,
        ease: "bounce.out",
        rotation: 360,
      }
    );
  }, []);

  return (
    <main>
      <h1 className="flex text-2xl font-bold text-zinc-300">
        <span className="flex mr-1">
          <MdOutlineFindReplace className="w-10 h-10 text-zinc-300" />
        </span>
        Discover
      </h1>
      <p className="mt-3 text-zinc-400">
        Imagine you&apos;re navigating through a maze of folders, and you lose track
        of your location:<code>pwd.dev</code>is like having a GPS that tells you
        exactly where you are and <code>where you want to be.</code>
      </p>

      <p className="mt-5 text-gray-500">
        <code>pwd</code> helps you discover your path.
      </p>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default Discover;
