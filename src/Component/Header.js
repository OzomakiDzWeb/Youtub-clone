import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { context } from "../Context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
     const [searchQuery,setSearchQuery]=useState('')
     const {loding,mobileMenue,setMobilMenu}=useContext(context)

     const navigat=useNavigate()

     const searchQueryHendler=(e)=>{
          if((e?.key==='Enter' || e === 'searchButton') && searchQuery?.length>0){
             navigat(`/searchResulte/${searchQuery}`)
          }
     }

     const mobileMenuToggle=()=>{
          setMobilMenu(!mobileMenue)
     }

     const {pathname}=useLocation()
     const pageName=pathname?.split("/")?.filter(Boolean)?.[0]
     
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
     {loding && <Loader/> }
     <div className="flex h-5 items-center">
     {pageName !=='video' &&(
       <div className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}>
          {mobileMenue 
            ?(<CgClose className="text-white text-xl"/>)
            :(<SlMenu className="text-white text-xl"/>)}
       </div>)}
       <Link to='/' className="flex h-5 items-center">
         <img className="h-full hidden dark:md:block" src={ytLogo} alt="logoIcon"/>
         <img className="h-full md:hidden" src={ytLogoMobile} alt="logoIcon"/>
       </Link>
      </div>
       <div className="group flex items-center">
         <div className="flex h-8 md:h-10 md:ml-10 border border-[#303030] rounded-l-3xl group-foucs-within:border-blue-500 md:group-focus-within::ml-5 md:group-focus-within:pl-0">
           <div className="w-10 items-center justify-center hidden group-focus-within:flex">
               <IoIosSearch className="text-white text-xl"/>
           </div>
           <input 
             type="text" 
             className="bg-transparent outline-none text-white pr-5 pl-5 md:group-focus-within:pl-0 md:w-64 lg-w-[500px]"
             onChange={e=>{setSearchQuery(e.target.value)}}
             value={searchQuery}/>
         </div>
         <button className="w-[40px] md:w-[50px] md:h-10 flex items-center border border-[#303030] rounded-r-3xl bg-white/[0.1] ">
               <IoIosSearch className="text-white text-xl"/>
             </button>
       </div>
     </div>
  )
}

export default Header