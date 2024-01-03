import Button from "../../Button/Button";
import PropertyTypeCarusol from "../../Carusol/PropertyTypeCarusol";
import Heading from "../../Heading/Heading";
import Paragraph from "../../paragraph/paragraph";

const PropertyType = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 flex">
      <div className="w-1/4">
        <Heading label={"Explore by Property Type"} />
        <Paragraph
          label={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit"
          }
        />
        <Button label={"+2300 Available Properties"} />
      </div>
      <div className="w-3/4 ">
        <PropertyTypeCarusol />
      </div>
    </div>
  );
};

export default PropertyType;
