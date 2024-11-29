import React from "react";
import SideNav from "./sideNav";

const subStudy = () => {
  const menuItems = [
    {
      title: "Module 1",
      subItems: ["Submodule 1.1", "Submodule 1.2"],
    },
    {
      title: "Module 2",
      subItems: ["Submodule 2.1", "Submodule 2.2", "Submodule 2.3"],
    },
    {
      title: "Module 3",
      subItems: [], 
    },
    {
      title: "Module 4",
      subItems: ["Submodule 4.1", "Submodule 4.2", "Submodule 4.3"], 
    },
  ];

  return (
    <div>
      <SideNav menuItems={menuItems} />
    </div>
  );
};

export default subStudy;
