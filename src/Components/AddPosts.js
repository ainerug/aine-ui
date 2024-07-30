import React from 'react'

export default function AddPosts() {
  return (
    <div className='w-[50%] p-[40px] bg-slate-600 text-white rounded-lg text-center m-auto mt-[50px]'>
      <h1>Create Post</h1>
      <input type="text" name="title" placeholder="Title: " className='w-[100%] p-[10px] text-slate-600'></input>
      <br/>
      <br/>
      <input type="number" name="user" placeholder="User ID: " className='w-[100%] p-[10px] text-slate-600'></input>
      <br/>
      <br/>
      <textarea placeholder='Body...' rows={6} cols={60} className='w-[100%] p-[10px] text-slate-600'></textarea>
      <br/>
      <br/>
      <button className='bg-slate-300 text-slate-600 w-[15%] h-[30px] rounded-md'>Add Post</button>
    </div>
  )
}
