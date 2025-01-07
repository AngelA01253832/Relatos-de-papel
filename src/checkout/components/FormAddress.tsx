import { useNavigate } from "react-router-dom";
import { Address } from "../models";
import { useContext, useEffect } from "react";
import { CartContext } from "../../cart/context";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { countries } from "../../utils";

interface FormData extends Address {}

export const FormAddress = () => {
  const getAddressFromCookies = (): FormData => {
    return {
      firstName: Cookies.get("firstName") || "",
      lastName: Cookies.get("lastName") || "",
      address: Cookies.get("address") || "",
      address2: Cookies.get("address2") || "",
      zip: Cookies.get("zip") || "",
      city: Cookies.get("city") || "",
      country: Cookies.get("country") || "",
      phone: Cookies.get("phone") || "",
    };
  };

  const navigate = useNavigate();
  const { updateAddress } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      address2: "",
      zip: "",
      city: "",
      country: countries[0].code,
      phone: "",
    },
  });

  useEffect(() => {
    reset(getAddressFromCookies());
  }, [reset]);

  const onSubmitAddress = (data: FormData) => {
    updateAddress(data);
    navigate("/checkout");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitAddress)}
      className="h-screen flex items-center justify-center px-4"
    >
      <div className="w-full xl:w-[1000px] flex flex-col justify-center text-left bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
          <div className="flex flex-col mb-2">
            <label>First Name</label>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
              {...register("firstName", {
                required: "This field is required.",
                minLength: {
                  value: 2,
                  message: "Must be at least 2 characters long.",
                },
              })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <label>Last Name</label>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
              {...register("lastName", {
                required: "This field is required.",
                minLength: {
                  value: 2,
                  message: "Must be at least 2 characters long.",
                },
              })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <label>Address</label>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
              {...register("address", {
                required: "This field is required.",
              })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <label>Address 2 (Optional)</label>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
              {...register("address2")}
            />
          </div>

          <div className="flex flex-col mb-2">
            <label>ZIP Code</label>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
              {...register("zip", {
                required: "This field is required.",
                pattern: {
                  value: /^[0-9]{5}$/,
                  message: "Must be a valid ZIP code (5 digits).",
                },
              })}
            />
            {errors.zip && (
              <p className="text-red-500 text-sm">{errors.zip.message}</p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <label>City</label>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
              {...register("city", {
                required: "This field is required.",
              })}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <label>Country</label>
            <select
              className="p-2 border rounded-md bg-gray-200"
              {...register("country", {
                required: "Selecting a country is required.",
              })}
            >
              <option value="">[ Select ]</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <label>Phone</label>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
              {...register("phone", {
                required: "This field is required.",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Must be a valid phone number (10 digits).",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex flex-col mb-2 sm:mt-10">
            <button
              type="submit"
              className="flex w-full disabled:bg-gray-500 items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Check Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
