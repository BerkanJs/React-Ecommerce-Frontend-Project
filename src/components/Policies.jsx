import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import PoliciesCard from "./PoliciesCard";

const Policies = () => {
  const { Policies } = useContext(ShopContext);

  return (
    <div className="w-full min-h-[25vh] flex flex-col space-y-8 sm:space-y-12 items-center justify-center mb-12 px-4 sm:px-8">
      {/* Başlık */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wider text-[#031444] text-center">
        Policies
      </h1>

      {/* Açıklama */}
      <h4 className="text-base sm:text-lg md:text-2xl font-light text-gray-500 tracking-tighter text-center max-w-4xl">
        We securely store users' personal data with encryption and regular
        updates to ensure privacy and protection. <br className="hidden sm:block" />
        Our website undergoes regular maintenance, and users are notified in
        advance of any planned downtime. <br className="hidden sm:block" />
        Prices are transparent and may vary based on stock, promotions, or
        location.
      </h4>

      {/* Kartlar */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center w-full gap-6 sm:gap-8">
        {Policies.map((data) => (
          <PoliciesCard
            key={data.id}
            img={data.img}
            desc={data.desc}
            header={data.header}
          />
        ))}
      </div>
    </div>
  );
};

export default Policies;
