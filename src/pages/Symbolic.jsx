import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const Symbolic = () => {
  // TODO: Implement the gsap.to() method
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      yoyo: true,
      repeat: -1,
      duration: 5,
      ease: "power1.inOut",
      rotation: 360,
    });
  }, []);

  return (
    <main>
      <h1>Symbolic</h1>
      <p className="mt-5 text-gray-500">
        The <code>pwd</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>
      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default Symbolic;
