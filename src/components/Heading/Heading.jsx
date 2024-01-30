/* eslint-disable react/prop-types */

const Heading = ({ label, className }) => {
  return (
    <div
      className={`relative text-2xl sm:text-3xl ml-5 md:text-4xl md:mx-5   font-medium text-gray-800 ${className}`}
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
          // Add this line for default text alignment
          // "@media (max-width: 400px)": {
          //   textAlign: "center",
          //   color: "red",
          // },
        }}
      />
    </div>
  );
};

export default Heading;
