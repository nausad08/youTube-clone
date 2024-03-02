import React from 'react'

const commentsData = [
  {
    name:"Tom",
    text: "lorem ipsum doller all ,adio",
    replies:[]
  },
  {
    name:"Tom",
    text: "lorem ipsum",
    replies:[]
  },
  {
    name:"Tom",
    text: "lorem ipsum",
    replies:[
      {
        name:"Tom",
        text: "lorem ipsum",
        replies:[]
      },
      {
        name:"Tom",
        text: "lorem ipsum",
        replies:[]
      },
    ]
  },
  {
    name:"Tom",
    text: "lorem ipsum",
    replies:[
      {
        name:"Tom",
        text: "lorem ipsum",
        replies:[]
      },{
        name:"Tom",
        text: "lorem ipsum",
        replies:[
          {
            name:"Tom",
            text: "lorem ipsum",
            replies:[
              {
                name:"Tom",
                text: "lorem ipsum",
                replies:[]
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name:"Tom",
    text: "lorem ipsum",
    replies:[]
  },
]
const Comment = ({data})=>{
  const {name,text,replies} = data;
  return(
     <div className=' m-2 flex shadow-sm bg-gray-100 p-2 rounded-md'>
      <img
       className='w-12 h-12'
      alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
     </div>)
}

const CommentList = ({comments}) =>{
  return comments.map((comment,index)=>(
  <div  key={index}>
    <Comment data={comment}/>
    <div className='pl-5 border border-l-black ml-5'>
      <CommentList comments={comment.replies}/>

    </div>
  </div>))
}

const CommentContainer = () => {
  return (
    <div className='m-5 p-2 w-3/5'>
      <h1 className='text-2xl font-bold'>Comment:  </h1>
      <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentContainer
