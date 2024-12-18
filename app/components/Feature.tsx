import React from "react";
import HeadingComponent from "./Heading";
import Image from "next/image";

type Props = {};

// https://i.ibb.co/kBrgYt5/carpet.png
// https://i.ibb.co/hBBX4gB/window-cleaning.png
// https://i.ibb.co/tBrGKj0/house-cleaning.png
// https://i.ibb.co/dKkLgsP/broom.png

const cleaningFeatures = [
  {
    id: '1',
    icon: "https://i.ibb.co/PcHq2s0/cleaning.png",
    title: "Professional Cleaners",
    description:
      "Our experienced team of professional cleaners will leave your space spotless.",
  },
  {
    id: '2',
    icon: "https://i.ibb.co/vLjtWXS/customize.png",
    title: "Flexible Scheduling",
    description:
      "We work around your schedule to make cleaning convenient for you.",
  },
  {
    id: '3',
    icon: "https://i.ibb.co/QfYWMP7/hand.png",
    title: "Customized Services",
    description:
      "Tailored cleaning solutions to meet your specific needs and preferences.",
  },
  {
    id: '4',

    icon: "https://i.ibb.co/tQYm7nB/flexibility.png",
    title: "Affordable Rates",
    description: "High-quality cleaning at competitive prices.",
  },
];

const Feature = (props: Props) => {
  
  return (
    <div>
      <div className="container mx-auto mt-24">
        <HeadingComponent text="Our Feature" align="text-center" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cleaningFeatures.map((feature) => (
            <div data-theme="light" key={feature.id} className="flex flex-col p-6 rounded-xl">
              
              <Image className="text-center mx-auto my-3 mb-5" height={70} width={70} src={feature.icon} alt="Lol" />
              <h3 className="text-2xl font-light text-primary">{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
