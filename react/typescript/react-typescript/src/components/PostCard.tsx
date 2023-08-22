

type Props = {
  title: string,
  description: string,
}

const PostCard = (props: Props) => {
  return (
    <div>
      { props.title }
      { props.description }
    </div>
  )
}

export default PostCard
