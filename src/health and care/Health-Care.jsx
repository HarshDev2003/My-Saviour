import React from "react";

const EligibilityPage = () => {
  return (
    <div className="p-4 md:p-8 lg:p-16">
      {/* Top Section with Logo and Title */}
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gray-200 rounded-full p-4 mb-4">
          <img
            src="/public/circle.png"
            alt="World Blood Donor Day"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Eligibility Requirements
        </h1>
      </div>

      {/* Middle Section with Text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-grey-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Lorem60</h2>
          <p className="text-justify">
            
          </p>
        </div>
        <div className="bg-grey-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Lorem60</h2>
          <p className="text-justify">
           
          </p>
        </div>
      </div>

      {/* Bottom Section with Image and Text */}
      <div className="flex flex-col items-center justify-center mt-8 bg-grey-100 p-4 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-2">
            CAN I DONATE BLOOD?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold">
            CHECK YOUR ELIGIBILITY TODAY
          </p>
          <p className="mt-2 text-sm md:text-base lg:text-lg">
            
          </p>
        </div>
        <img
          src="/Blood donation.png"
          alt="Blood Donation"
          className="mt-4 w-full max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
    </div>
  );
};

export default EligibilityPage;
