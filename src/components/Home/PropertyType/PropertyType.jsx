import Button from "../../Button/Button";
import PropertyTypeCarusol from "../../Carusol/PropertyTypeCarusol";
import Heading from "../../Heading/Heading";
import Paragraph from "../../paragraph/paragraph";

const PropertyType = () => {
  return (
    <div className="lg:max-w-7xl mx-auto py-16 lg:flex">
      <div className="w-full  lg:w-2/6">
        <Heading label={"Locations"} />
        <Paragraph
          label={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit"
          }
        />
        <Button label={"+2300 Available Properties"} />
      </div>
      <div className="  lg:w-4/6 ">
        <PropertyTypeCarusol />
      </div>
    </div>
  );
};

export default PropertyType;
