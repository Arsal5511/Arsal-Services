import React from "react";

const CountryItems = ({ data }) => {
    return (
        <div className="flex flex-wrap flex-1 mt-[40px] w-[90%] sm:w-[60%] md:w-[50%] lg:w-[50%] items-center justify-center space-x-2 space-y-2 mb-3 ">
            {data?.map((country, index) => {
                const countryKeys = Object.keys(country.currencies);
                const langKeys = Object.keys(country.languages);

                return (
                    <div className="flex px-3 bg-blue-800 items-center justify-center  rounded-xl  backdrop:z shadow-lg " >
                        <section
                            key={index}
                            className="flex flex-col rounded-xl max-w-[350px] items-center justify-center  my-4">

                            <div id=" upper_section " className="flex items-center bg-white  p-3 ">
                                <div
                                    id="img"
                                    className=" w-[50%] mr-4  "
                                >
                                    <img
                                        className="backdrop-blur-lg shadow-2xl  "
                                        src={country.flags.png}
                                        alt={country.flags.alt}
                                    />
                                </div>
                                <div
                                    id="country_name"
                                    className=" ml-4  w-[50%] text-white-800  "
                                >
                                    <h2 className="text-center font-bold text-xl">
                                        {country.name.official}
                                    </h2>
                                    <h2 className="text-center font-bold text-lg">
                                        Capital City
                                    </h2>
                                    <h2 className="text-center font-light text-lg">
                                        {country.capital}
                                    </h2>
                                </div>
                            </div>

                            <div id="data" className="bg-[rgb(255,255,255)] p-5 w-[100%] ">
                                <tbody>
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
                                    <tr>
                                        <td className="py-1 px-2 font-semibold">
                                            Currency:
                                        </td>
                                        {countryKeys?.map((i) => {
                                            return (
                                                <td key={i} className='py-1 px-2 ' >
                                                    {country.currencies[i]?.symbol} ({i})
                                                </td>
                                            );
                                        })}
                                    </tr>
                                    <tr>
                                        <td className="py-1 px-2 font-semibold">
                                            Languages:
                                        </td>
                                        {langKeys?.map((i) => {
                                            return (
                                                <td key={i} className='py-1 px-2 ' >
                                                    ( {i} ) {country.languages[i]}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                </tbody>
                            </div>


                        </section>
                    </div>
                );
            })}
        </div >
    );
};

export default CountryItems;
