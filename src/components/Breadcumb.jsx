import { Breadcrumb } from "flowbite-react";
import { CgTerminal } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

export default function HeaderBreadcrumb() {
  return (
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
}
