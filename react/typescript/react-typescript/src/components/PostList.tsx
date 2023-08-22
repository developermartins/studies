import PostCard from "./PostCard"


type Props = {}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  };

  return res.json();
};

const PostList = (props: Props) => {
  return (
    <div>
      <PostCard title="Lorem Ipsum" body="Dollor sit amet" />
    </div>
  );
};

export default PostList;
