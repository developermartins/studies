import { PostProps } from "../types/types"



const PostCard = ({ title, body }: PostProps) => {
  return (
    <div>
      { title }
      { body }
    </div>
  )
}

export default PostCard
