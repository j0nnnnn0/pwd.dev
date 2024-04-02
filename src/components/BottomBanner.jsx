import { Banner } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { GiPathDistance } from "react-icons/gi";

export default function BottomBanner() {
  return (
    <Banner>
      <div className="flex w-full justify-between border-t border-gray-600 bg-gray-700 p-4 ">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-400">
            <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full  p-1 bg-gray-600">
              <GiPathDistance className="h-10 w-10" />
            </span>
            <span className="font-medium ">
              Find your path;
              <a
                href="/"
                className="ml-0 flex items-center text-sm font-medium  hover:underline text-orange-400 md:ml-1 md:inline-flex"
              >
                Become a partner
                <HiArrowRight className="ml-2" />
              </a>
            </span>
          </p>
        </div>
        <Banner.CollapseButton
          color="gray"
          className="border-0 bg-transparent text-gray-400"
        >
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
}
