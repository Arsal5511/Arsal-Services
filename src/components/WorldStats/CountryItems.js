import React from "react";
import { FcApproval } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCopyAll } from "react-icons/md";
import { toast } from "react-toastify";
import ModalButton from "../common/ModalButton";

const toasterContainer = () => {
    return (
        <div className="flex items-center space-x-2">
            <FcApproval className="h-6 w-6" />
            <h2 className="font-semibold">Text copied to clipboard!</h2>
        </div>
    );
};

const CountryItems = ({ data, handleDelete }) => {
    return (
        <div className="flex flex-wrap justify-center  mb-3 mt-[40px]   ">
            {data?.map((country, index) => {
                const countryKeys = Object.keys(country.currencies);
                const langKeys = Object.keys(country.languages);
                const handleCopy = async () => {
                    const countryTemplate = `
            ${country.name.official
                        } is a sovereign nation with its capital is ${country.capital}. 
            It has a diverse population of approximately ${country.population
                        } people and spans an area of ${country.area} 
            square kilometers. The official ${countryKeys.length > 1 ? "currencies are" : "currency is"
                        } ${countryKeys?.join(" and ")}, and the primary spoken ${langKeys.length > 1 ? "languages are" : "language is"
                        }  ${langKeys?.join(" and ")}.`;
                    await navigator.clipboard.writeText(
                        countryTemplate.replace(/\s+/g, " ")
                    );
                    toast(toasterContainer, {
                        position: "top-right",
                        autoClose: 1000,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        hideProgressBar: true,
                        theme: "light",
                    });
                };

                return (
                    <div className="flex flex-col px-3 pt-2 m-3 bg-blue-200  items-center justify-center rounded-xl backdrop:z shadow-lg ">
                        <div id="cross" className="w-[100%] flex justify-end">
                            <div
                                onClick={handleCopy}
                                className=" flex items-center justify-center rounded-full z-[30] text-xl mr-2 text-white bg-blue-600 w-[30px] h-[30px] cursor-pointer hover:text-grey-700 hover:bg-blue-700  "
                            >
                                <MdOutlineCopyAll />
                            </div>
                            <ModalButton
                                Button={({ toggleModal }) => {
                                    return (
                                        <div className=" flex items-center justify-center rounded-full z-[30] text-xl text-white bg-red-600 w-[30px] h-[30px] cursor-pointer hover:text-grey-700 hover:bg-red-700  "
                                        >
                                            <IoMdClose onClick={() => { toggleModal() }}
                                            />
                                        </div>
                                    );
                                }}
                                title={"Are you sure?"}
                                Content={({ toggleModal }) => {
                                    return (
                                        <>
                                            <div className="flex mx-2 justify-end">
                                                <button
                                                    onClick={() => {
                                                        toggleModal();
                                                    }}
                                                    className="white-button"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        handleDelete(country.name.official)
                                                        toggleModal();
                                                    }
                                                    }
                                                    className="blue-button"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </>
                                    );
                                }}
                            />

                        </div>

                        <section
                            key={index}
                            className="flex flex-col max-w-[300px] sm:max-w-[370px] items-center justify-center  rounded-xl backdrop:z shadow-lg mb-3 mt-2 p-3 bg-white "
                        >
                            <div id="img" className="w-[50%] object-cover mb-4 ">
                                <img
                                    className="custom-box-shadow"
                                    src={country.flags.png}
                                    alt={country.flags.alt}
                                />
                            </div>

                            <div
                                id="country_name"
                                className=" w-[90%] bg-blue-200 p-2 rounded-xl my-3 "
                            >
                                <h2 className="text-center font-bold text-xl">
                                    {country.name.official}
                                </h2>
                            </div>
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td className="py-1 px-2 font-semibold">Capital City:</td>
                                        <td className="py-1 px-2">{country.capital}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1 px-2 font-semibold">
                                            Total Population:
                                        </td>
                                        <td className="py-1 px-2">{country.population}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1 px-2 font-semibold">Area:</td>
                                        <td className="py-1 px-2">{country.area}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <section className="w-full">
                                <div className="flex">
                                    <h2 className="py-1 px-2 font-semibold w-[90px]">
                                        Currency:
                                    </h2>
                                    <div className="flex flex-wrap">
                                        {countryKeys?.map((i) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className="py-1 px-2 flex flex-wrap space-x-1"
                                                >
                                                    <span>{country.currencies[i]?.symbol}</span>
                                                    <span>({i})</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="flex">
                                    <h2 className="py-1 px-2 font-semibold w-[90px]">
                                        Languages:
                                    </h2>
                                    <div className="flex flex-wrap">
                                        {langKeys?.map((i) => {
                                            return (
                                                <div key={i} className="py-1 px-2 flex space-x-1">
                                                    <span>( {i} )</span>
                                                    <span>{country.languages[i]}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
                );
            })}
        </div>
    );
};

export default CountryItems;
