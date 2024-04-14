import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Echoweb</span>{" "}
          is one of local leading ecommerce brands and is cambodain 
          recognized for providing lowlest price product for local and providing easy way for shoping to cambodian loacl peple.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-teal-500  rounded-md mt-3 text-white hover:bg-teal-400 duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
