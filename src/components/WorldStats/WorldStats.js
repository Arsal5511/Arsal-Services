import React, { useEffect, useState } from 'react'
import { MdAddCircleOutline } from 'react-icons/md';
import ModalButton from '../common/ModalButton';
import WorldForm from './WorldForm';
import { FcGlobe } from "react-icons/fc";
import CountryItems from './CountryItems';


const WorldStats = () => {
    const [data, setData] = useState([])



    const fetchData = () => {
        let getSessionalData = sessionStorage.getItem('world');
        getSessionalData = JSON.parse(getSessionalData);
        setData(getSessionalData || [])
    }

    useEffect(() => {
        fetchData()
    }, [])


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
            <CountryItems data={data} />

        </div>
    )
}

export default WorldStats

