import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

const WatchPage = () => {
  const[searchParams] = useSearchParams();
  // console.log(searchParams.get("v"))

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    <div className='flex flex-col w-full h-full'>
    <div className='px-7 w-full h-full '>
      <iframe width="60%" height="400" src={"https://www.youtube.com/embed/"+ searchParams.get("v")}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

      </iframe>
      <div className='m-2 w-[60%]'>
        <h1 className='font-bold text-2xl'>Video Name</h1>
        <div className='flex '>
            <div className='flex mr-40'>
              <img  className='w-10 h-10' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
              <p>Tom Creuse</p>
            </div>
            <button className='bg-gray-200 px-3 p-2  m-4 rounded-l-full rounded-r-full'>🔔Subscribe ↓</button>
            <button className='bg-gray-200 px-3  m-4 rounded-l-full rounded-r-full'>👍 1.1k <span className='border-r border-black'></span>👎</button>
            <button className=' flex items-center m-4 bg-gray-200 px-3  rounded-l-full rounded-r-full'>
              <img className='w-8 h-8' alt='arr' src='https://static.thenounproject.com/png/2295247-200.png'/>
              Share</button>
           
        </div>
      </div>
      <CommentContainer/>
      
    </div>
    </div>
  )
}

export default WatchPage
