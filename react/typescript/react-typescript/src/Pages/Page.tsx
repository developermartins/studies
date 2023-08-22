import Child from "../components/Children/Child";
import Parent from "../components/Children/Parent";
import SecondChild from "../components/Children/SecondChild";


type Props = {}

const Page = (props: Props) => {
  return (
    <div>
      <Parent>
        <Child />
        <SecondChild />
      </Parent>
    </div>
  );
};

export default Page;
