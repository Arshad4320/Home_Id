import BestProperties from "../../components/Home/Packages/Packages";
import ConstantCard from "../../components/Home/ConstantUpdatesCard/ConstantCard";
import Destinations from "../../components/Home/Destinations/Destinations";
import Header from "../../components/Home/Header/Header";
// import Neighborhood from "../../components/Home/Neighborhood/Neighborhood";

import PropertiesRent from "../../components/Home/PropertiesRent/PropertiesRent";
import PropertyType from "../../components/Home/PropertyType/PropertyType";
import Packages from "../../components/Home/Packages/Packages";

const Home = () => {
  return (
    <div>
      <Header />

      <PropertyType />
      {/* <BestProperties /> */}
      <PropertiesRent />
      <Packages />
      {/* <Neighborhood /> */}
      {/* <Destinations /> */}
      <ConstantCard />
      {/* <Partner /> */}
    </div>
  );
};

export default Home;
