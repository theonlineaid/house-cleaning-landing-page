import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import HeadingComponent from "./Heading";


const pricingPlans = [
  {
    title: "Basic",
    description: "The essentials to provide your best work for clients.",
    price: "$49/month",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
      "Community access",
      "Basic reporting",
      "Manual invoicing",
      "Email support",
      "Access to knowledge base",
      "Limited integration options",
    ],
  },
  {
    title: "Standard",
    description: "A balanced package for growing businesses.",
    price: "$99/month",
    features: [
      "25 products",
      "Up to 5,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Team accounts",
      "Custom reporting",
      "Automated invoicing",
      "Priority email support",
      "API access",
      "Multiple integrations",
    ],
  },
  {
    title: "Pro",
    description: "Comprehensive tools for scaling businesses.",
    price: "$199/month",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Premium analytics",
      "Priority support",
      "Dedicated account manager",
      "Custom workflows",
      "Advanced automation",
      "Phone and email support",
      "Advanced API access",
      "All integration options",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="container mx-auto mt-24">
      <HeadingComponent text="Pricing" align="text-center" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            data-theme="light"
            className="card bg-gray-100 p-10"
          >
            <h1 className="text-2xl mb-3">{plan.title}</h1>
            <p>{plan.description}</p>
            <h1 className="text-4xl font-bold my-3">{plan.price}</h1>

            <div className="py-3 pb-10">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex gap-1">
                  <CheckIcon className="text-primary" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <button className="btn btn-block btn-secondary">Buy plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}
