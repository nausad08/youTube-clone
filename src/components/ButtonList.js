import React from 'react'
import Button from './Button'
const list = ["All","Drama", "Gaming","Songs","Live","Musics","Cricket","News","Watched","Newly Uploaded",]

const ButtonList = () => {
  return (
    <div className='flex relative flex-nowrap overflow-hidden text-nowrap'>
      {list.map((list,ind)=>(
        <Button key={ind} name={list}/>
      ))}
      
      
    </div>
  )
}

export default ButtonList
