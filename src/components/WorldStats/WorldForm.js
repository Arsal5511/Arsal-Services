import React, { useState } from "react";
import axios from "axios";
import CountryInput from "./CountryInput";

const WorldForm = (props) => {
    const { toggleModal, data, setData, fetchData } = props;
    // const [loading, setLoading] = useState(true)
    const [myError, setMyError] = useState("");
    const [name, setName] = useState("");

    const apiFetch = async () => {
        try {
            const response = await axios.get(
                `https://restcountries.com/v3.1/name/${name}`
            );
            sutructureData(response.data);

            setName("");
        } catch (error) {
            setMyError(error);
            console.log(myError);
        }
    };

    const sutructureData = (response) => {
        response?.forEach((element) => {

            // structured Data
            let myData = {};
            const { name, population, currencies, languages, area, capital, flags } =
                element;
            myData.name = name;
            myData.population = population;
            myData.area = area;
            myData.currencies = currencies;
            myData.languages = languages;
            myData.capital = capital;
            myData.flags = flags;
            const updData = [...data, myData];

            //   update State
            setData(updData);

            // uploaded data to Local storage
            const localData = JSON.stringify(updData);
            localStorage.setItem("world", localData);

            //refetch new data
            fetchData();
        });
    };

    const handleSearch = () => {
        apiFetch();
        toggleModal();
    };
    // document.addEventListener('keydown', (event) => {
    //     if (event.key === 'Enter') {
    //         handleSearch();
    //     }})
    const handleEnter = (button) => {
        if (button.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <section>
            <div className="my-8">
                <label className="text-lg">Country Name</label>
                {/* <input
                    onKeyDown={handleEnter}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    type="text"
                    name="api"
                    id=""
                    value={name}
                    className="mt-2 block w-full rounded-md py-1.5 border-2 border-gray-400  px-2 text-gray-900 shadow-sm placeholder:text-gray-400 md:text-lg text-sm sm:leading-6"
                /> */}
                <CountryInput setName={setName} handleSearch={handleSearch} />

            </div>
            <div className="flex mx-2 mt-2 justify-end">
                <button
                    onClick={() => {
                        toggleModal();
                    }}
                    className="white-button"
                >
                    Cancel
                </button>
                <button className="blue-button" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </section>
    );
};

export default WorldForm;
