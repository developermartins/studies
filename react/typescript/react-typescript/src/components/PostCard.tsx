

type Props = {
  title: string,
  body: string,
}

const PostCard = (props: Props) => {
  return (
    <div>
      { props.title }
      { props.body }
    </div>
  )
}

export default PostCard
