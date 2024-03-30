import { Breadcrumb } from "flowbite-react";
import { CgTerminal } from "react-icons/cg";
import { useLocation } from "react-router-dom";

export default function HeaderBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
      <div className="mx-auto max-w-3xl ring-1 bg-zinc-900 ring-zinc-300/20 xl:max-w-5xl p-1 text-white">
        <Breadcrumb>
          <Breadcrumb.Item href="/new">
            <CgTerminal className=" ml-2 breadIcon" style={{ fontSize: "25px" }} />
          </Breadcrumb.Item>
          {pathnames.map((value, index) => {
            const to = `/new/${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <Breadcrumb.Item key={index} href={to}>
                <span className="breadIcon">{value}</span>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
  );
}

