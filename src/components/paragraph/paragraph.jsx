/* eslint-disable react/prop-types */

const Paragraph = ({ label, className }) => {
  return (
    <div className={`text-gray-500 sm:mx-5  py-6 font-semibold ${className}`}>
      {label}
    </div>
  );
};

export default Paragraph;
