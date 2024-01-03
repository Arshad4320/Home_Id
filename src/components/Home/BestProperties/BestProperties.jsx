import Button from "../../Button/Button";
import Carusol from "../../Carusol/Carusol";
import Heading from "../../Heading/Heading";
import Paragraph from "../../paragraph/paragraph";

const BestProperties = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 mb-14 ">
      <div className="flex justify-between ">
        <Heading label={"  Best Properties For Sale"} />
        <br />

        <Button label="Seel All Properties" />
      </div>
      <Paragraph
        label={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit"
        }
      />
      <Carusol />
    </div>
  );
};

export default BestProperties;
