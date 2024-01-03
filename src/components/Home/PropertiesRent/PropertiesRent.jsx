import Button from "../../Button/Button";
import Carusol from "../../Carusol/Carusol";
import Heading from "../../Heading/Heading";
import Paragraph from "../../paragraph/paragraph";

const PropertiesRent = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20  mb-14">
      <div className="flex justify-between ">
        <Heading label={"Best Properties For Rent"} />
        <Button label={"See All Properties"} />
      </div>
      <div className="">
        <Paragraph
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
