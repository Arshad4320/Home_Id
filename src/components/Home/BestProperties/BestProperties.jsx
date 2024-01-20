import Carusol from "../../Carusol/Carusol";
import Heading from "../../Heading/Heading";
import Paragraph from "../../paragraph/paragraph";
import Button from "./../../Button/Button";

const BestProperties = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 mb-14 ">
      <div className="  md:flex  justify-between ">
        <Heading
          className={" mb-3 md:mb-0"}
          label={"  Best Properties For Sale"}
        />
        <br />

        <Button className="" label="Seel All Properties" />
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
