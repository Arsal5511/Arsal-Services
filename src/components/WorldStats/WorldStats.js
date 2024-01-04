import React, { useEffect, useState } from 'react'
import { MdAddCircleOutline } from 'react-icons/md';
import ModalButton from '../common/ModalButton';
import WorldForm from './WorldForm';
import { FcGlobe } from "react-icons/fc";
import CountryItems from './CountryItems';


const WorldStats = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        let getLocalData = localStorage.getItem('world');
        getLocalData = JSON.parse(getLocalData);
        setData(getLocalData || [])
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = (name) => {
        const updatedStats = data?.filter((country) => {
            return country?.name.official !== name;
        });
        setData(updatedStats);
        const sessionalData = JSON.stringify(updatedStats);
        sessionStorage.setItem("world", sessionalData);
    };


    return (
        <div className='min-h-[100vh] mt-[130px] flex items-center flex-col'>
            <div className='w-[50%] flex flex-col items-center '>
                <FcGlobe className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px]" />
                <h2 className="primary-heading  text-center mt-3 text-black">Welcome to World Stats</h2>
                <p className="text-center text-black">Here you can find statistics of any country world-Wide </p>
                <ModalButton
                    Button={({ toggleModal }) => {
                        return (
                            <MdAddCircleOutline
                                className="cursor-pointer text-[50px] hover:text-gray-600"
                                onClick={() => {
                                    toggleModal();
                                }}
                            />
                        );
                    }}
                    title={"Enter Country Name"}
                    Content={({ toggleModal }) => {
                        return (
                            <>
                                <WorldForm toggleModal={toggleModal} data={data} setData={setData} fetchData={fetchData} />
                            </>
                        );
                    }}
                />
            </div>
            <CountryItems data={data} handleDelete={handleDelete} />

        </div>
    )
}

export default WorldStats

