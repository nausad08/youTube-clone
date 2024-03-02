import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import {cacheResult} from "../utils/searchSlice"
const Head = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store)=> store.search)
  const dispatch = useDispatch()

  useEffect(()=>{
    // console.log(searchQuery)
    const timer = setTimeout(()=>{ 
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestion()
      }
      
    },200 );

    return() =>{
      clearTimeout(timer);
    }
  },[searchQuery])

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json);
    // /update cache
    dispatch(cacheResult(
      {
        [searchQuery]: json[1],
      }
    ))

  }



  const toggleMenuHandler =() =>{
    dispatch(toggleMenu())

  }

  return (
    <div className=' grid grid-flow-col p-2 mx-2 shadow-lg'>
        <div className='flex items-center col-span-1'>
           <img 
           onClick={()=> toggleMenuHandler()}
            className='h-8 cursor-pointer'
           alt='menu' src='https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-4562823-3856517.png?f=webp&w=512'/>
           <a href='/'>  <img 
           className='h-14 mx-2'
           alt='youtube-logo' src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg'/>
           </a>
        </div>

        <div className='col-span-10 self-center px-10'>
         <div>
            <input className='p-2 px-4 w-[67%] border border-gray-400 rounded-l-full'  type='text' placeholder='Search'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=> setShowSuggestion(true)}
            onBlur={()=> setShowSuggestion(false)}
            />
            <button className=' p-2 bg-gray-200   border border-gray-400 rounded-r-full  px-4'>🔍</button>
            <button className=' p-2 ml-3 bg-gray-200 border  border-gray-400 rounded-full'>🎙️</button>
          </div>
          { showSuggestions && (<div className='fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg z-10 border border-gray-100'>
            <ul>
              {
                suggestions.map((s)=>(
                  <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>
                ))
              }
             </ul>
          </div>)}
        </div>

        <div className='col-span-1'>
            <img 
            className='h-8' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
        </div>
     </div>
  )
}

export default Head
