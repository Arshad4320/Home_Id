import { useForm } from "react-hook-form";

const SearchInput = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        className=" py-16  w-full mx-auto lg:hidden"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" text-primary  rounded-md bg-white ">
          {" "}
          <input
            className="outline-none rounded-md p-3 w-full  "
            placeholder="Search..."
            {...register("exampleRequired")}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
