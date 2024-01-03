import React from "react";
import { IoMdClose } from "react-icons/io";

const CountryItems = ({ data, handleDelete }) => {
    return (
        <div className="flex flex-wrap justify-center  mb-3 mt-[40px]   ">
            {data?.map((country, index) => {
                const countryKeys = Object.keys(country.currencies);
                const langKeys = Object.keys(country.languages);

                const countryTemplate = `
                ${country.name.official
                    } is a sovereign nation with its capital is ${country.capital}. 
                It has a diverse population of approximately ${country.population
                    } people and spans an area of ${country.area
                    } square kilometers. 
                The official ${countryKeys.length > 1 ? "currencies are" : "currency is"
                    } ${countryKeys?.join(" and ")}, and the primary spoken ${langKeys.length > 1 ? "languages are" : "language is"
                    }  ${langKeys?.join(" and ")}.
                `;
                console.log(countryTemplate);

                return (
                    <div className="flex flex-col px-3 pt-2 m-3 bg-blue-200  items-center justify-center rounded-xl backdrop:z shadow-lg ">
                        <div id="cross" className="w-[100%] flex justify-end">
                            <div
                                onClick={() => handleDelete(country.name.official)}
                                className=" flex items-center justify-center rounded-full z-[30] text-xl text-white bg-red-500 w-[30px] h-[30px] cursor-pointer hover:text-grey-700 hover:bg-red-700  "
                            >
                                <IoMdClose />
                            </div>
                        </div>

                        <section
                            key={index}
                            className="flex max-w-[370px] items-center justify-center  rounded-xl backdrop:z shadow-lg mb-3 mt-2"
                        >
                            <div className="flex flex-col items-center justify-center rounded-xl bg-white  p-3 ">
                                <div id="img" className=" w-[50%] mb-4 ">
                                    <img
                                        className="backdrop-blur-lg shadow-2xl h-[100px] "
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
                                <table className="w-full">
                                    <tbody>

                                        <tr>
                                            <td className="py-1 px-2 font-semibold">Currency:</td>
                                            {countryKeys?.map((i) => {
                                                return (
                                                    <td key={i} className="py-1 px-2 max-w-[70px] ">

                                                        {country.currencies[i]?.symbol}({i})
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                        <tr>
                                            <td className="py-1 px-2 font-semibold">Languages:</td>
                                            {langKeys?.map((i) => {
                                                return (
                                                    <td key={i} className="py-1 px-2 ">
                                                        ( {i} ) {country.languages[i]}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </section>
                    </div>
                );
            })}
        </div>
    );
};

export default CountryItems;
