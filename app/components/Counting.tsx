import React from "react";
import Count from "./client/Count";

const featureData = [
  {
    count: 700,
    title: "Happy Customer",
  },
  {
    count: 2000,
    title: "Services Provider",
  },
  {
    count: 600,
    title: "Expert Cleaner",
  },
  {
    count: 30,
    title: "Winning Award",
  },
];

type Props = {};

const Counting = (props: Props) => {
  return (
    <div className="container mx-auto mt-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-cyan-500 to-blue-500 card">
        {featureData.map((feature) => (
          <div className="text-center py-20" key={feature.title}>
            <h1 className="text-3xl">{feature.title}</h1>

            <h1 className="text-5xl font-extrabold mt-4 text-white">
              <Count end={feature.count} duration={10} />
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counting;
