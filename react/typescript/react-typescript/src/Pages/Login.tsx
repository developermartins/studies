import { useState } from "react";
import { UserType } from "../types/types";


type Props = {}

const Login = (props: Props) => {

  const [username, setUsername] = useState('');
  const [user, setUser] = useState<UserType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setUsername(e.target.value);
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };

  return (
    <div>
      { user ? (
        `${ user.name } logged in`
      ) : <form>
            <input type="text" placeholder="Username" onChange={ handleChange }/>
            <button onClick={ handleLogin }>Login</button>
          </form>
      }
    </div>
  );
};

export default Login;
