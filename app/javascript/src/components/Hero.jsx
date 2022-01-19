import React from "react";

import { Button } from "neetoui/v2";

import { FEATURE_LIST } from "./constants";

const Features = ({ features }) => {
  return (
    <ul className="list-disc">
      {features.map((feature, index) => (
        <li key={index} className="py-3 border-b border-gray-100 last:border-0">
          {feature}
        </li>
      ))}
    </ul>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center max-w-3xl p-8 m-auto">
        <h1 className="mb-3 text-4xl font-bold">Wheel</h1>
        <p className="mx-auto mb-6 text-lg text-center text-gray-800">
          Don&apos;t reinvent the wheel. Use sane defaults to bootstrap your
          react-rails project!
        </p>
        <Features features={FEATURE_LIST} />
        <div className="flex items-center justify-center mt-6">
          <Button size="large" type="primary" to="/login" label="Login" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
