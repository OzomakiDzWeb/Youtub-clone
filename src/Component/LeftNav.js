import React from 'react'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { categories } from '../Utiltis/Constans'
import LeftNavMenuitme from './LeftNavMenuItme'
import { context } from '../Context/contextApi'
const LeftNav = () => {
  const naviga=useNavigate()
  const {selectCategories,setSelectCategories,mobileMenue}=useContext(context)
  const clickHandl=(name,type)=>{
    switch (type){
      case 'category':
        return setSelectCategories(name)
      case 'home':
        return setSelectCategories(name)
      case 'menu':
        return false
      default:
        break;
    }
  }
  
  return (
    <div className='md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute        md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all'>
      <div className='flex px-5 flex-col'>
        {categories.map((itm,idx)=>{
          return(
            <div key={idx}>
             <LeftNavMenuitme 
              text={itm.type==='home'?'Home':itm.name}
              icon={itm.icon}
              action={()=>{
                clickHandl(itm.name,itm.type)
                naviga('/')}}
              className={`${selectCategories === itm.name?'bg-white/[0.15]':''}`}/>
              {itm.divider &&(<hr className='my-5  border-white/[0.2]'></hr>)}
            </div>
          )
        })}
        <hr className='my-5  border-white/[0.2]'></hr>
        <div className='text-white/[0.5] text-[12px]'> clone youtub by ozomakiWeb</div>
      </div>
    </div>
  )
}

export default LeftNav