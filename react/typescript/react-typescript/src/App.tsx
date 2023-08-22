import Login from "./Pages/Login"
import Page from "./Pages/Page"
import UseContextExample from "./Pages/UseContextExample"
import PostList from "./components/PostList/PostList"
import { ThemeProvider } from "./context/ThemeContext"


function App() {

  return (
    <div>
      {/* <PostList /> */}
      {/* <Page /> */}
      {/* <Login /> */}

      <ThemeProvider>
        <UseContextExample />
      </ThemeProvider>
    </div>
  )
}

export default App
