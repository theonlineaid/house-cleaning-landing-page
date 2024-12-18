import React from "react";
import HeadingComponent from "./Heading";

type Props = {
    order: string
};

const WhyChooseUs = ({order}: Props) => {
  return (
    <div className="container mx-auto mt-24">
      <HeadingComponent text="Why Choose Us" align="text-center" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 ">
        <div className={`flex-col lg:flex-row p-5 ${order} `}>
          <div>
            <p className="text-primary mb-6">Audience source monitoring</p>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <p>Chat prompt module supported</p>
            <p>Manage ultimate conversation</p>
            <p>Enjoy unlimited features by paid plans</p>
            <p>Chat prompt module supported</p>
            <p>Manage ultimate conversation</p>
            <p>Enjoy unlimited features by paid plans</p>

            <button className="btn btn-primary mt-2">Get Started</button>
          </div>
        </div>
        <div >
          <img className="card" src="https://img.freepik.com/premium-photo/woman-cleaning-floor-with-mop-living-room-home-with-smile-happy-asian-cleaner-doing-housework-job-clean-lounge-hotel-room-house-while-smiling-alone-spring-cleaning_590464-85963.jpg" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
