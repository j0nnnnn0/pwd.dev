import { GrValidate } from "react-icons/gr";

const Validate = () => {

  return (
    <main>
      <h1 className="flex text-2xl font-bold text-zinc-300">
        <span className="flex mr-1">
          <GrValidate className="w-10 h-10 text-zinc-300" />
        </span>
        Validate
      </h1>
      <p className="mt-3 text-zinc-400">
        Imagine you're navigating through a maze of folders, and you lose track
        of your location:<code>pwd.dev</code>is like having a GPS that tells you
        exactly where you are and <code>where you want to be.</code>
      </p>

      <p className="mt-5 text-gray-500">
        <code>pwd</code> helps you validate your path.
      </p>

    </main>
  );
};

export default Validate;
