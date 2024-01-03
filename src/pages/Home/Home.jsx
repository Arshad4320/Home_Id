import BestProperties from "../../components/Home/BestProperties/BestProperties";
import ConstantCard from "../../components/Home/ConstantUpdatesCard/ConstantCard";
import Destinations from "../../components/Home/Destinations/Destinations";
import Header from "../../components/Home/Header/Header";
import Neighborhood from "../../components/Home/Neighborhood/Neighborhood";
import Partner from "../../components/Home/Partner/Partner";
import PropertiesRent from "../../components/Home/PropertiesRent/PropertiesRent";
import PropertyType from "../../components/Home/PropertyType/PropertyType";

const Home = () => {
  return (
    <div>
      <Header />
      <BestProperties />
      <PropertyType />
      <PropertiesRent />
      <Neighborhood />
      <Destinations />
      <ConstantCard />
      <Partner />
    </div>
  );
};

export default Home;
