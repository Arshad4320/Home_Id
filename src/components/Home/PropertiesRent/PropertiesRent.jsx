import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import Carusol from "../../Carusol/Carusol";
import Heading from "../../Heading/Heading";
import Paragraph from "../../paragraph/paragraph";

const PropertiesRent = () => {
  return (
    <div className="md:max-w-7xl md:mx-auto pt-20  mb-14">
      <div className="mx-5 md:mx-0 md:flex justify-between ">
        <Heading className="mb-10 md:mb-0" label={"Propertys"} />
        <Link to="/properties">
          <Button label={"See All Properties"} />
        </Link>
      </div>
      <div className="">
        <Paragraph
          className="px-5 md:mx-0"
          label={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit"
          }
        />

        <Carusol />
      </div>
    </div>
  );
};

export default PropertiesRent;
