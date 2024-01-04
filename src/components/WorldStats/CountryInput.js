import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { countries } from "./CountriesArray";
import { FaAngleDown } from "react-icons/fa6";
import { RiArrowRightSFill } from "react-icons/ri";

// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function CountryInput({ setName }) {
  const [selected, setSelected] = useState({name: ""});
  const [query, setQuery] = useState("");

  useEffect(() => {
    if(selected.name === ""){
        setName(query)
    }else{
        setName(selected.name)
    }

  }, [selected , query]);
  console.log(query , selected)
  
  const filteredPeople =
    query === ""
      ? countries
      : countries.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="fixed top-16 w-[91%] ">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none sm:text-sm block py-1.5 border-2 border-gray-400 text-gray-900  placeholder:text-gray-400 md:text-lg text-sm sm:leading-6 active:outline-none">
            <Combobox.Input
              className="w-full border-none text-xl pl-3 pr-10 pt-1 leading-5 text-gray-900  active:outline-none focus:outline-none"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <FaAngleDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-[50%] overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm">
              {(filteredPeople.length === 0 && query !== "") ? (
                <div className="relative cursor-default select-none px-4 py-2 w-full text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-blue-300 text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <RiArrowRightSFill />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
