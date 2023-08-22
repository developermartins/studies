import { ItemProps } from "../../types/types"


type Props = {}

// Generics example

const Item = (props: ItemProps<object>) => {
  return (
    <div>Item</div>
  );
};

export default Item;