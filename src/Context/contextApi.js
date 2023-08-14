import React,{useState,createContext,useEffect} from "react";
import {fetchDataApi} from '../Utiltis/Api'

export const context=createContext()

export const AppContext=(props)=>{
     const [loding,setLoding]=useState(false)
     const [searchResultes,setsearchResultes]=useState(false)
     const [selectCategories,setSelectCategories]=useState(false)
     const [mobileMenue,setMobilMenu]=useState(false)

     useEffect(()=>{
         fetchSelctCategory(selectCategories) 
     },[selectCategories])
 const fetchSelctCategory=(q)=>{
setLoding(true)
fetchDataApi(`search/?q=${q}`).then(({contents})=>{
     
     setLoding(false)
})
 }
     return(
          <context.Provider value={{
               loding,
               setLoding,
               searchResultes,
               setSelectCategories,
               selectCategories,
               mobileMenue,
               setMobilMenu
          }}>
               {props.children}
          </context.Provider>
     )
}