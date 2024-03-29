import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const GsapStagger = () => {
  // TODO: Implement the gsap.stagger() method
  useGSAP(() => {
    gsap.from(".stagger-box", {
      x: 100,
      y:50,
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
      repeat: 0
    });
  }, []);

  return (
    <main>
      <div className="mt-5">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-gray-700 rounded-lg stagger-box">
            <div className="font-bold text-6xl flex justify-center  items-center text-green-600 ">p</div>
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded-lg stagger-box">
            <div className="font-bold text-6xl justify-center flex items-center text-green-600">w</div>
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded-lg stagger-box">
            <div className="font-bold text-6xl justify-center flex items-center text-green-600">d</div>
          </div>

          <div className="w-20 h-12 bg-green-600 rounded-lg stagger-box" >
            <div className="font-bold text-4xl justify-center flex items-center">&gt;_</div>
          </div>
          <div className="w-10 h-10 bg-gray-700 rounded-lg stagger-box">
            <div className="font-bold text-3xl justify-center flex items-center text-green-600">d</div>
          </div>
          <div className="w-10 h-10 bg-gray-700 rounded-lg stagger-box" >
            <div className="font-bold text-3xl justify-center flex items-center text-green-600">e</div>
          </div>
          <div className="w-10 h-10 bg-gray-700 rounded-lg stagger-box">
            <div className="font-bold text-3xl justify-center flex items-center text-green-600">v</div>
          </div>
        </div>
      </div>
      <br />
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>


    </main>
  );
};

export default GsapStagger;
