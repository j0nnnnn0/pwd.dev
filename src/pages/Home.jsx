import { Link } from "react-router-dom";
import { VscSymbolNamespace } from "react-icons/vsc";
import { GiChoice } from "react-icons/gi";
import { GrValidate } from "react-icons/gr";
import { MdRoundaboutRight, MdOutlineFindReplace } from "react-icons/md";
import { CgMoreAlt } from "react-icons/cg";
import { TbCurrentLocation } from "react-icons/tb";


const animations = [
  {
    icon:<VscSymbolNamespace className="w-10 h-10  text-zinc-300 "/>,
    title: "Symbolic",
    description:
      " Provides a dynamic way to access and utilize the current directory path.  $PWD is equivalent to the output of 'pwd -L'",
    path: "/symbolic",
  },
  {
    icon:<TbCurrentLocation className="w-10 h-10 text-zinc-300"/>,
    title: "Actual",
    description:
      "The from() method is used to animate a single element from an ending state to a starting state.",
    path: "/gsapfrom",
  },
  {
    icon:<MdOutlineFindReplace className="w-10 h-10 text-zinc-300"/>,
    title: "Discover",
    description:
      "The fromTo() method is used to animate a single element from a starting state to an ending state and vice versa.",
    path: "/gsapfromto",
  },
  {
    icon:<GiChoice className="w-10 h-10 text-zinc-300"/>,
    title: "Evaluate",
    description:
      "The timeline() method is used to create a timeline to manage multiple animations.",
    path: "/gsaptimeline",
  },
  {
    icon:<GrValidate className="w-10 h-10 text-zinc-300"/>,
    title: "Validate",
    description:
      "The stagger() method is used to animate multiple elements with a stagger effect.",
    path: "/gsapstagger",
  },
  {
    icon:<MdRoundaboutRight className="w-10 h-10 text-zinc-300"/>,
    title: "About",
    description:
      "The ScrollTrigger plugin is used to trigger animations based on the scroll position.",
    path: "/gsapscrolltrigger",
  },
  {
    icon:<CgMoreAlt className="w-10 h-10 text-zinc-300"/>,
    title: "More or less...",
    description: "Learn how to animate text with GSAP.",
    path: "/gsaptext",
  },
];


const Home = () => {
  return (
    <main className="container">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-zinc-300">Find your path...</h1>
        <ol className="flex flex-col mt-10 shadow-md">
          {animations.map((animation, index) => (
            <li
              key={index}
              className="flex flex-row gap-2 p-5 hover:bg-zinc-800/50 rounded-lg"
            >
              <p>
                <span className="text-sm font-bold text-zinc-50"></span>
              </p>
              <p>
              {animation.icon}
              </p>
              <div className="flex flex-col gap-2 flex-1">
                <Link
                  to={animation.path}
                  className="text-md font-semibold text-green-600"
                >
                  {animation.title}
                </Link>
                <p className="text-gray-400 text-sm">{animation.description}</p>
              </div>
              <svg
                className="size-6 text-gray-600 -rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 13.586z"
                />
              </svg>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Home;
