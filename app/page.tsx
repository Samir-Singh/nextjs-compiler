"use client";

import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState<number | null>(null);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-6xl h-[480px] flex">
        {[
          { id: 1, img: "/coworking1.jpg", title: "Coworking" },
          { id: 2, img: "/coworking2.png", title: "Enterprise" },
          { id: 3, img: "/coworking3.jpg", title: "Mobility" },
          { id: 4, img: "/coworking4.jpg", title: "Awfis Transform" },
        ]?.map((item) => {
          const isExpanded = item.id === expand;
          const isCollapsed = expand !== null && item.id !== expand;

          return (
            <div
              key={item?.id}
              onMouseOver={() => setExpand(item?.id)}
              onMouseOut={() => setExpand(null)}
              className={`transition-all duration-500 ease-in-out flex justify-center items-end ${
                isExpanded ? "w-full" : "w-1/4"
              } h-full bg-[url('/coworking1.jpg')] bg-no-repeat border-b-6 ${
                item?.id % 2 === 0 ? "border-gray-300" : "border-red-600"
              }`}
              style={{
                backgroundImage: isExpanded ? "none" : `url(${item?.img})`,
              }}
            >
              <span
                className={`text-2xl text-white font-medium mb-10 transition-transform duration-500  ${
                  isCollapsed ? "-rotate-90" : ""
                }`}
              >
                {item?.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
