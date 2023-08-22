import Child from "../components/Children/Child";
import Parent from "../components/Children/Parent";


type Props = {}

const Page = (props: Props) => {
  return (
    <div>
      <Parent>
        <Child />
      </Parent>
    </div>
  );
};

export default Page;
