import { Breadcrumb, Badge } from "flowbite-react";
import { CgTerminal } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { HiCheck, HiClock } from "react-icons/hi";

export default function HeaderBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="flex mx-auto max-w-3xl ring-1 bg-zinc-900 ring-zinc-300/20 xl:max-w-5xl p-1 text-white justify-between">
      <div className="flex flex-col">
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <CgTerminal
              className=" ml-2 breadIcon"
              style={{ fontSize: "25px" }}
            />
          </Breadcrumb.Item>
          {pathnames.map((value, index) => {
            const to = `${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <Breadcrumb.Item key={index} href={to}>
                <span className="breadIcon">{value}</span>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-2 pr-10">
          <Badge size="sm" color="dark" >2 minutes ago</Badge>
          <Badge size="sm" color="success" >Time to find your path</Badge>
        </div>
      </div>
    </div>
  );
}
