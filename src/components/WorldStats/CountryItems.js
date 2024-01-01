import React from 'react'

const CountryItems = ({ data }) => {

    return (
        <div className='flex flex-col w-[50%]  items-center justify-center mt-[40px] '>
            {
                data?.map((country, index) => {
                    const countryKeys = Object.keys(country.currencies)
                    const langKeys = Object.keys(country.languages)

                    return (
                        <section key={index} className='flex flex-col md:flex-row items-center justify-between backdrop:z m-4 p-8 md:w-[100%] shadow-lg  my-4 rounded-3xl  bg-[#dbeafe] '>
                            <div id='data' className="border-black-500 justify-start">
                                <h1 className='font-bold text-3xl justify-center text-center md:text-left p-3 pl-0'>{country.name.common}</h1>
                                <p >Total Population:   {country.population}</p>
                                <p >Capital City:   {country.capital}</p>
                                <p >Area:   {country.area}</p>
                                <ul>
                                    {countryKeys?.map((i) => {
                                        return (
                                            <div key={i}>
                                                <span>Currency: ({i})</span>
                                                <span>{country.currencies[i]?.name}<br></br></span>
                                                <span>Currency symbol:  {country.currencies[i]?.symbol}</span>
                                            </div>
                                        )
                                    })}
                                </ul>
                                <ol>Languages:
                                    {langKeys?.map((i) => {
                                        return (
                                            <div key={i}>
                                                <li> (   {i}  )   <span>{country.languages[i]}</span>
                                                </li >
                                            </div>
                                        )
                                    })}
                                </ol>
                            </div>
                            <div id='img' className=" mt-5 flex justify-end flex-col items-center md:mt-0 ">
                                <img className='w-[100px] h-[100px] rounded-[50%] md:rounded-none md:w-[150px]  ' src={country.flags.png} alt={country.flags.alt} width={100} />
                            </div>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default CountryItems
