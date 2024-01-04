import img from "../../../assets/image/partner-hover-1.png";
import img2 from "../../../assets/image/partner-hover-2.png";
import img3 from "../../../assets/image/partner-hover-3.png";
import img4 from "../../../assets/image/partner-4.png";
import img5 from "../../../assets/image/partner-hover-5.png";
import img6 from "../../../assets/image/partner-6.png";

const partnerLogo = [
  {
    id: 1,
    img: img,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
];

const Partner = () => {
  return (
    <div className="relative py-2">
      <div className="max-w-7xl mx-auto  my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ">
        {partnerLogo.map((logo) => {
          return (
            <div key={logo.id} className="flex justify-center items-center ">
              <img className="" src={logo.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
