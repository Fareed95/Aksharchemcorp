import React from 'react'
import data from '../../components/data.json'
import * as motion from "motion/react-client"
import Chem from "../../images/chemistry.png"
import Image from 'next/image';
import SearchBar from '@/app/components/SearchBar';
// import { FlaskConical } from 'lucide-react'; 


const SpecialtyChem = () => {
  const chemData = data.chemicals.specialty_chemicals;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-teal-200 py-12 px-4 sm:px-4 mt-20 overflow-clip">
      <motion.div className='flex justify-center items-center'>
        <motion.div
          initial={{ width: "74vh" }}
          whileInView={{ width: "100vw" }}
          // whileHover={{scale:1.3}}
          // whileTap={{rotate:5}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-[#20B2AA] text-white rounded-lg flex items-center justify-center flex-col shadow-xl mb-10 h-60 "
        >
          <div className="relative w-32 h-32 mb-4">
            <Image
              src={Chem}
              alt="Specialty Chemicals"
              fill
              className="object-contain"
            />
          </div>

          <h4 className="text-2xl font-bold mb-2 mt-2">Specialty Chemicals</h4>
          <p className=' hidden sm:block'>Reliable supply of top-grade industrial chemical solutions.</p>


        </motion.div>
      </motion.div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#20B2AA] mb-8 text-center">
          Specialty Chemicals
        </h2>
        <div className=' flex w-full justify-center items-center sm:pr-8 pr-4'>
        <SearchBar prop={"df"}></SearchBar>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 mt-8 text-left px-2 sm:px-0 border-b-2 border-teal-400 pb-2 w-fit">
          Our expertise in...
        </h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {chemData.map((elem, idx) => (
            <motion.div
              initial={{opacity:0,}}
              whileInView={{opacity:1,}}
              transition={{duration:0.5, ease:"easeInOut"}}
              key={idx}
              className="flex items-center space-x-4 p-4 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-teal-50" // Subtle background on hover
            >
              {/* Large, prominent icon */}
              {/* <FlaskConical className="text-blue-600 flex-shrink-0" size={48} strokeWidth={1.5} /> */}

              {/* Text content */}
              <li className="text-xl font-semibold text-gray-800 hover:text-[#20B2AA] cursor-pointer">
                {elem}
              </li>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SpecialtyChem;
