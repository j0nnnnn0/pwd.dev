import { Timeline } from "flowbite-react";
import { MdRoundaboutRight } from "react-icons/md";

const About = () => {
  return (
    <main>
      <h1 className="flex text-2xl font-bold text-zinc-300">
        <span className="flex mr-1">
          {" "}
          <MdRoundaboutRight className="w-10 h-10 text-zinc-300" />
        </span>
        About
      </h1>
      <p className="mt-3 text-zinc-400">
        Imagine you&apos;re navigating through a maze of folders, and you lose track
        of your location:<code>pwd.dev</code>is like having a GPS that tells you
        exactly where you are and <code>where you want to be.</code>
      </p>
      <p className="mt-5 text-zinc-300">Our timeline:</p>
      <br />
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time className=" text-orange-400">
              June 2024
            </Timeline.Time>
            <Timeline.Title className="text-green-600 text-md font-bold">
              Launch pwd.dev
            </Timeline.Title>
            <Timeline.Body className="text-zinc-400">
              Start helping developers find their path...
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time className=" text-orange-400">
              December 2023
            </Timeline.Time>
            <Timeline.Title className="text-green-600 text-md font-bold">
              Build pwd.dev
            </Timeline.Title>
            <Timeline.Body className="text-zinc-400">
              Create the platform that helps developers find their path...
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time className=" text-orange-400">
              April 2023
            </Timeline.Time>
            <Timeline.Title className="text-green-600 text-md font-bold">
              Conceptualise pwd.dev
            </Timeline.Title>
            <Timeline.Body className="text-zinc-400">
              Thinking about how to help developers find their path...
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </main>
  );
};

export default About;
