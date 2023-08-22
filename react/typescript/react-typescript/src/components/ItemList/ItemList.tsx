import Item from "../Item/Item"

type Props = {}

const ItemList = (props: Props) => {

  // Generics example

  return (
    <div>
      <Item id={ 1 } title="Lorem Ipsum" extra={[{
        id: 1,
        username: 'Doe'
      }]} />
    </div>
  );
};

export default ItemList;