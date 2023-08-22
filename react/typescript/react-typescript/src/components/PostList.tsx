import { useEffect, useState } from "react";
import PostCard from "./PostCard"


type Props = {}

const PostList = (props: Props) => {

  const [data, setData] = useState([]);

  
  useEffect(() => {
    
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      };
    
      const resJson = await res.json();

      setData(resJson)
    };

    getData();
    
  }, []);

  console.log(data)

  return (
    <div>
      {
        data.map((post: { id: number, title: string, body: string }) => (
          <PostCard key={ post.id } { ...post }/>
        ))
      }
    </div>
  );
};

export default PostList;
