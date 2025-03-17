import React from 'react'

const PoliciesCard = ({img,desc,header}) => {

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-15  hover:cursor-pointer hover:shadow-xl transition-shadow duration-300">
    <h1 className="text-2xl font-semibold  mb-4 text-center ">{header}</h1>
  
    <div className="w-full h-48 mb-4">
      <img src={img} alt="" className="w-full h-full object-cover rounded-md" />
    </div>
  
    <h3 className="text-lg text-[#708090]">{desc}</h3>
  </div>
  )
}

export default PoliciesCard