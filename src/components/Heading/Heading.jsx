/* eslint-disable react/prop-types */

const Heading = ({ label, className }) => {
  return (
    <div
      className={`relative text-4xl  font-medium text-gray-800 ${className}`}
    >
      <div className="relative z-10 ">{label}</div>
      <div
        style={{
          marginTop: "15px",
          marginBottom: "15px",
          color: "#0ec6d5",
          borderBottom: "4px solid",
          position: "absolute",
          width: "80px",
        }}
      />
    </div>
  );
};

export default Heading;
