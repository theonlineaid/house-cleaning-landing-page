// @ts-nocheck
"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

type Props = {};

const Count = ({ end, duration }: any) => {
  const [counter, setCounter] = useState(false);
  return (
    <div>
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        {counter && (
          <CountUp end={end} duration={duration} prefix="" suffix="" />
        )}
      </ScrollTrigger>
    </div>
  );
};

export default Count;
