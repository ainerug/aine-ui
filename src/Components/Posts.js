import React, { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    console.log(data);
    setPosts(data.posts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {posts.map((item) => {
        return (
          <div className="p-[10px]">
            <h1 className="text-xl font-semibold">{item.title}</h1>
            <p>{item.body}</p>
            <div className="flex items-center gap-[10px]">
                {item.tags.map((tagName)=>{

                    return(
                        <p className="bg-slate-400 text-white px-[30px] py-[10px] rounded-md">{tagName}</p>
                    )
                })}
            </div>

          </div>
        );
      })}

      
    </div>
  );
}
