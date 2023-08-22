import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


type Props = {}

const UseContextExample = (props: Props) => {

  const { state, dispatch } = useContext(ThemeContext);

  console.log(state)

  return (
    <div>
      <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>Change theme</button>
      <button onClick={() => dispatch({ type: "CHANGE_FONTSIZE", payload: 20 })}>Change font size</button>
    </div>
  );
};

export default UseContextExample;
