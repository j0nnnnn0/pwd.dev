import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import { CgTerminal } from "react-icons/cg";

export default function Header() {
  useGSAP(() => {
    gsap.from(".stagger-box", {
      x: 150,
      y: 150,
      opacity: 0,
      duration: 2.5,
      ease: "power1.inOut",
      rotation: 120,
      borderRadius: "100%",
      stagger: {
        amount: 0.5,
        grid: [6, 3],
        axis: "x",
        ease: "circ.inOut",
        from: "center",
      },
      repeat: 0,
    });
  }, []);

  return (
    <header>
      <div className="mt-1">
        <div className="gap-1 flex justify-center">
          <div className="w-15 h-20  rounded-lg stagger-box">
            <div className="mt-1 font-bold text-6xl flex justify-center items-center text-green-600 ">
              p
            </div>
          </div>
          <div className="w-15 h-20  rounded-lg stagger-box">
            <div className="mt-1 font-bold text-6xl justify-center flex items-center text-green-600">
              w
            </div>
          </div>
          <div className="w-15 h-20  rounded-lg stagger-box">
            <div className="mt-1 font-bold text-6xl justify-center flex items-center text-green-600">
              d
            </div>
          </div>
          {/*           <div className="w-12 h-12 bg-green-600 rounded-lg stagger-box mt-4 hover:bg-black">
            <Tooltip
              content="Home"
              className="text-xs text-orange-400"
              style="dark"
              position="bottom"
            >
              <Link
                to="/"
                alt="Home"
                className="font-extrabold text-4xl justify-center flex items-center text-black"
              >
                &gt;
                <span className="animate-ping">_</span>
              </Link>
            </Tooltip>
          </div> */}
          <div>
            <CgTerminal className="w-20 h-20 stagger-box breadIcon" />
          </div>
          <div className="flex justify-center mr-1">
            <div className="mt-1 w-4 h-8  rounded-lg stagger-box flex justify-center">
              <Tooltip
                content="Discover"
                className="text-xs text-orange-400"
                style="dark"
                position="bottom"
              >
                <Link className="font-semibold text-2xl justify-center flex items-center text-green-600">
                  d
                </Link>
              </Tooltip>
            </div>
            <div className="mt-1 w-4 h-8  rounded-lg stagger-box  flex justify-center">
              <Tooltip
                content="Evaluate"
                className="text-xs text-orange-400"
                style="dark"
                position="bottom"
              >
                <Link
                  to="/gsapto"
                  className="font-semibold text-2xl justify-center flex items-center text-green-600"
                >
                  e
                </Link>
              </Tooltip>
            </div>
            <div className="mt-1 w-4 h-8  rounded-lg stagger-box  flex justify-center">
              <Tooltip
                content="Validate"
                className="text-xs text-orange-400"
                style="dark"
                position="bottom"
              >
                <Link
                  to="/gsapto"
                  className="font-semibold text-2xl justify-center flex items-center text-green-600"
                >
                  v
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
