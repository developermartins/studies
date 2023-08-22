import React from "react";
import Child from "../components/Children/Child";
import Parent from "../components/Children/Parent";
import SecondChild from "../components/Children/SecondChild";


type Props = {}

const Page = (props: Props) => {

  // Tipando evento de click
  const handleClik = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log('Searched!')
  }

  // Tipando evento de mudanças em inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return (
    <div>

      <form>
        <input type="text" onChange={ handleChange }/>
        <button onClick={ handleClik }>Search</button>
      </form>

      <Parent>
        <Child />
        <SecondChild />
      </Parent>
    </div>
  );
};

export default Page;
