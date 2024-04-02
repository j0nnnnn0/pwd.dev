import { Banner, Badge} from "flowbite-react";
import { HiClock } from "react-icons/hi";
import { CgTerminal } from "react-icons/cg";
import { useEffect, useState } from 'react';

export default function StickyBanner() {

    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date();
        const targetDate = new Date('2024-06-01');
        const diffTime = Math.abs(targetDate - now);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDaysLeft(diffDays);
      }, 1000);
      return () => clearInterval(timer);
    }, []);


  return (
    <Banner>
      <div className="mt-6 mb-4 flex w-[calc(100%-2rem)] flex-col justify-between rounded-lg  p-1 bg-gray-700 md:flex-row lg:max-w-7xl">
        <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
          <a
            href="https://pwd.dev/"
            className="mb-2 flex items-center border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4"
          >
            <CgTerminal
              className=" ml-2 text-zinc-300"
              style={{ fontSize: "25px" }}
            />
            <span className="pl-4 self-center whitespace-nowrap text-sm font-semibold text-zinc-300 md:pr-6">
              pwd.dev
            </span>
          </a>
          <p className="flex items-center text-sm font-semibold text-orange-400">
            We&apos;re in dev mode and getting things ready.
          </p>
        </div>
        <div className="flex shrink-0 items-center">
        <Badge className="text-zinc-300" color="dark" icon={HiClock}>
        {daysLeft} {daysLeft === 1 ? 'day' : 'days'} to go
      </Badge>
        </div>
      </div>
    </Banner>
  );
}
