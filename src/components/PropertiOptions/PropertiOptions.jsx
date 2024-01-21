import React from "react";
import Select from "react-select";
import { homeType } from "../SelectOptions/Options";
const PropertiOptions = () => {
  return (
    <div className="flex flex-row gap-5 ml-5 my-14 ">
      <Select
        options={homeType}
        className="outline-none w-full text-gray-600"
        styles={{
          control: (provided) => ({
            ...provided,
            height: "full",
          }),
          menu: (provided) => ({
            ...provided,
            height: "100%",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#0ec6d5" : "#fff",
            color: state.isSelected ? "#fff" : "#000",
          }),
        }}
      />

      <Select
        options={homeType}
        className="outline-none w-full text-gray-600 "
        styles={{
          control: (provided) => ({
            ...provided,
            height: "full",
          }),
          menu: (provided) => ({
            ...provided,
            height: "100%",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#0ec6d5" : "#fff",
            color: state.isSelected ? "#fff" : "#000",
          }),
        }}
      />
      <Select
        options={homeType}
        className="outline-none w-full text-gray-600 "
        styles={{
          control: (provided) => ({
            ...provided,
            height: "full",
          }),
          menu: (provided) => ({
            ...provided,
            height: "100%",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#0ec6d5" : "#fff",
            color: state.isSelected ? "#fff" : "#000",
          }),
        }}
      />
      <Select
        options={homeType}
        className="outline-none w-full text-gray-600 "
        styles={{
          control: (provided) => ({
            ...provided,
            height: "full",
          }),
          menu: (provided) => ({
            ...provided,
            height: "100%",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#0ec6d5" : "#fff",
            color: state.isSelected ? "#fff" : "#000",
          }),
        }}
      />
      <Select
        options={homeType}
        className="outline-none w-full text-gray-600 "
        styles={{
          control: (provided) => ({
            ...provided,
            height: "full",
          }),
          menu: (provided) => ({
            ...provided,
            height: "100%",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#0ec6d5" : "#fff",
            color: state.isSelected ? "#fff" : "#000",
          }),
        }}
      />
      <Select
        options={homeType}
        className="outline-none w-full text-gray-600 "
        styles={{
          control: (provided) => ({
            ...provided,
            height: "full",
          }),
          menu: (provided) => ({
            ...provided,
            height: "100%",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#0ec6d5" : "#fff",
            color: state.isSelected ? "#fff" : "#000",
          }),
        }}
      />
    </div>
  );
};

export default PropertiOptions;
