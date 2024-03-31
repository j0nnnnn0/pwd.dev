import { Link } from "react-router-dom";
import { VscSymbolNamespace } from "react-icons/vsc";
import { GiChoice } from "react-icons/gi";
import { GrValidate } from "react-icons/gr";
import { MdRoundaboutRight, MdOutlineFindReplace } from "react-icons/md";
import { CgMoreAlt } from "react-icons/cg";
import { TbCurrentLocation } from "react-icons/tb";

const animations = [
  {
    icon: <TbCurrentLocation className="w-10 h-10 text-zinc-300" />,
    title: "Actual",
    description: "A good starting point?",
    path: "/actual",
  },
  {
    icon: <VscSymbolNamespace className="w-10 h-10  text-zinc-300 " />,
    title: "Symbolic",
    description: "For a path that might change",
    path: "/symbolic",
  },
  {
    icon: <MdOutlineFindReplace className="w-10 h-10 text-zinc-300" />,
    title: "Discover",
    description: "Well, I never thought of that before.",
    path: "/discover",
  },
  {
    icon: <GiChoice className="w-10 h-10 text-zinc-300" />,
    title: "Evaluate",
    description: "Decisions, decisions...",
    path: "/evaluate",
  },
  {
    icon: <GrValidate className="w-10 h-10 text-zinc-300" />,
    title: "Validate",
    description: "Got to make sure it makes sense.",
    path: "/validate",
  },
  {
    icon: <CgMoreAlt className="w-10 h-10 text-zinc-300" />,
    title: "More or less...",
    description: "More or less usefull stuff.",
    path: "/moreorless",
  },
  {
    icon: <MdRoundaboutRight className="w-10 h-10 text-zinc-300" />,
    title: "About",
    description: "Learn more about pwd.dev",
    path: "/about",
  },
];

const Home = () => {
  return (
    <main className="container">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-zinc-300">Find your path...</h1>
        <p className="mt-3 text-zinc-400">
          Imagine you're navigating through a maze of folders, and you lose
          track of your location:<code>pwd.dev</code>is like having a GPS that
          tells you exactly where you are and <code>where you want to be.</code>
        </p>
        <ol className="flex flex-col mt-3 shadow-md">
          {animations.map((animation, index) => (
            <li
              key={index}
              className="flex flex-row gap-2 p-5 hover:bg-zinc-800/50 rounded-lg"
            >
              <p>
                <span className="text-sm font-bold text-zinc-50"></span>
              </p>
              <p>{animation.icon}</p>
              <div className="flex flex-col flex-1">
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
