import { Breadcrumb } from "flowbite-react";
import { CgTerminal } from "react-icons/cg";
import { useLocation } from "react-router-dom";

export default function HeaderBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <breadcrumbs className="flex flex-col">
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/new">
            <CgTerminal className=" ml-2 breadIcon" style={{ fontSize: "25px" }} /><a className="ml-2">pwd: </a>
          </Breadcrumb.Item>
          {pathnames.map((value, index) => {
            const to = `/new/${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <Breadcrumb.Item key={index} href={to}>
                <span>{value}</span>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    </breadcrumbs>
  );
}

/*   return (
    <breadcrumb className="flex flex-col">
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/new">
            <CgTerminal className="breadIcon" style={{ fontSize: "25px"} } />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">
            <a>Projects</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a>Flowbite React</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </breadcrumb>
  );
} */
