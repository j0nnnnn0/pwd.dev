import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

export default function Header() {
  useGSAP(() => {
    gsap.from(".stagger-box", {
      x: 100,
      y: 50,
      opacity: 0,
      duration: 1.5,
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
  //}

  return (
    <header>
      <div className="mt-1">
        <div className="flex gap-3 justify-center">
          <div className="w-20 h-20 bg-gray-700 rounded-lg stagger-box">
            <div className="font-bold text-3xl sm:text-6xl flex justify-center items-center text-green-600 ">
              p
            </div>
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded-lg stagger-box">
            <div className="font-bold text-6xl justify-center flex items-center text-green-600">
              w
            </div>
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded-lg stagger-box">
            <div className="font-bold text-6xl justify-center flex items-center text-green-600">
              d
            </div>
          </div>
          <div className="w-12 h-12 bg-green-600 rounded-lg stagger-box mt-4 hover:bg-black">
            <Link
              to="/"
              className="font-extrabold text-4xl justify-center flex items-center text-black"
            >
              &gt;
              <p className="animate-ping">_</p>
            </Link>
          </div>
          <div className="flex gap-1 justify-center">
            <div className="w-8 h-8 bg-gray-700 rounded-lg stagger-box hover:bg-black">
              <Link className="font-semibold text-2xl justify-center flex items-center text-green-600">
                d
              </Link>
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-lg stagger-box hover:bg-black">
              <Link
                to="/gsapto"
                className="font-semibold text-2xl justify-center flex items-center text-green-600"
              >
                e
              </Link>
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-lg stagger-box hover:bg-black">
              <Link
                to="/gsapto"
                className="font-semibold text-2xl justify-center flex items-center text-green-600"
              >
                v
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
