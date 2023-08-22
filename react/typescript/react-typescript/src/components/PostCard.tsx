import { PostProps } from "../types/types"



const PostCard = (props: PostProps) => {
  return (
    <div>
      { props.title }
      { props.body }
    </div>
  )
}

export default PostCard
